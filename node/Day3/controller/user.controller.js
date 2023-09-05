import Users from "../dao/daoUser.js"
import tryCatchErr  from "../module/tryCatchErr.js"
import userJoi from "../joi/user.joi.js"
const userDB = new Users()

export const  getAllUsers =tryCatchErr( async (req,res)=>{

  const {ageX , ageY} = req.query
  if(ageX&&ageY) {
    const db = await userDB.getUserBetweenAgeXY(ageX,ageY)
    if(!db?.[0]) return res.status(404).json({message:`Not found users in age between ${ageX} and ${ageY}`}) 
    return res.json(db) 
  }
    const db = await userDB.allUsers()

    res.json(db) 
    })


export const getAllUsersSorted = tryCatchErr( async (req,res)=>{
    const db = await userDB.allUsersSortByDate()
  
      res.json(db) 
 })

export const getUserById =tryCatchErr( async (req,res)=>{

    const userId = req.params.id
     let user= await userDB.getUseById(userId)
     if(user){

         res.json(user)
         
     }else{
         res.status(404).send(`not found user with id: ${userId}`)
     }
})
export const addUser = tryCatchErr( async (req,res)=>{
 const user = req.body 
            // console.log(req.body)
  const valid =   await userJoi.validateAsync(user)
if(valid){
   
     
           
        
          let db = await userDB.addUser(user)
            res.status(201).json(db)
            
}
   })

export const updateUser = tryCatchErr( async (req,res)=>{

    res.statusCode = 200
  
     
         const user = req.body
         const id = req.params.id 
       let db = await  userDB.updateUser(id,user)
       res.json(db)
         
   
}  )
export const deleteUser = tryCatchErr( async (req,res)=>{
  console.log("from deleteUser controller")
  const id = req.params.id 
  let db = await userDB.deleteUser(id)
    res.json(db)
    

} )

