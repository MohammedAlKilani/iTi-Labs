import jwt from "jsonwebtoken"
import Users from "../dao/daoUser.js"
import tryCatchErr  from "../module/tryCatchErr.js"
import "dotenv"
const userDao = new Users()

export const  getAllUsers =tryCatchErr( async (req,res)=>{

  const {ageX , ageY , nameStartX} = req.query
  if(ageX&&ageY) {
    const db = await userDao.getUserBetweenAgeXY(ageX,ageY)
    if(!db?.[0]) return res.status(404).json({message:`Not found users in age between ${ageX} and ${ageY}`}) 
    return res.json(db) 
  }
  
  if(nameStartX&&ageY) {
    const db = await userDao.getUserNameStarWithXAndAgeLessThan(nameStartX,ageY)
    if(!db?.[0]) return res.status(404).json({message:`Not found users name start with ${nameStartX} and  age less than  ${ageY}`}) 
    return res.json(db) 
  }

    const db = await userDao.allUsers()

    res.json(db) 
    })


export const getAllUsersSorted = tryCatchErr( async (req,res)=>{
    const data = await userDao.allUsersSortByDate()
      
      res.json(data) 
 })

export const getUserById =tryCatchErr( async (req,res)=>{

    const userId = req.params.id
     let user= await userDao.getUseById(userId)
     if(user){

         res.json(user)
         
     }else{
         res.status(404).send(`not found user with id: ${userId}`)
     }
})
export const addUser = tryCatchErr( async (req,res)=>{
  const user = req.body 
      const  findUser   = await userDao.findUserByEmail(user.email)
      if(findUser)return res.status(400).send("email is unique")
  let newUser = await userDao.addUser(user)
  newUser.password = undefined
 const token =  jwt.sign(newUser,process.env.SECRET_KEY,{expiresIn:60*60*24*5})
 res.cookie("token",token,{ maxAge: 60*60*24*5, httpOnly: true })
  res.status(201).json(newUser)
            

   })

export const updateUser = tryCatchErr( async (req,res)=>{

    res.statusCode = 200
  
     
         const user = req.body
         const id = req.params.id 
       let db = await  userDao.updateUser(id,user)
       res.json(db)
         
   
}  )
export const deleteUser = tryCatchErr( async (req,res)=>{
  console.log("from deleteUser controller")
  const id = req.params.id 
  let db = await userDao.deleteUser(id)
    res.json(db)
    

} )

export const signinUser =tryCatchErr(async (req,res)=>{

    const userFind = await userDao.findUserByEmail(req.body.email)


    if(userFind){

    const isCorrect =  await  userDao.checkPassword(req.body.password,userFind.password)
    if(isCorrect){
      userFind.password = undefined
      const token =  jwt.sign(userFind.toJSON(),process.env.SECRET_KEY,{expiresIn:60*60*24*5})
 res.cookie("token",token,{ maxAge: 60*60*24*5, httpOnly: true })
      console.log(userFind)
        return res.json(userFind)
    }else{
      return res.status(400).json({message:"Password not correct"})
    }
    }else{
      return res.status(400).json({message:"Email not found && sign up if you not"})
    }
})

export const isAuthorized = (req,res,next)=>{

if(req.headers?.authorization?.split(" ")?.[0] =="Bearer ")return res.status(400).json({message:"authorization not have Bearer"})

const token = req.headers.authorization.split(" ")[1] 
 
 const tokenData = jwt.verify(token,process.env.SECRET_KEY)
 if(tokenData){
  req.userData = tokenData
  return next()
  // res.json(tokenData)
}

 return res.status(401)
}
