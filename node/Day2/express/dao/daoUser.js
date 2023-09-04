class Users{

    constructor(){
            Users.db= [{_id:1, name:"muhammad",age:25},
                        {_id:2, name:"Ali",age:22}
                        
                    ]
       
    }
    allUsers(){
        return Users.db
    }
    addUser(user){
        Users.db.push(user)
        return Users.db
    }
    allUsersSortByName(){
        const dbToSort = [...Users.db]
        dbToSort.sort((a,b)=>{
            const nameA = a.name.toUpperCase(); 
            const nameB = b.name.toUpperCase(); 
            if(nameA < nameB){
                return -1
            }else if(nameA > nameB){
                return 1
            }else{
                return 0
            }
        })
        return dbToSort
    }
    updateUser(userReq){
        Users.db.forEach((user,i) => {

             if(user._id == userReq._id){
                Users.db[i]={...user,...userReq}
             }
        })
        return Users.db
    }

    deleteUser(userReq){
        Users.db.forEach((user,i) => {

            if(user._id == userReq._id){
               Users.db.splice(i,1)
            }
       })
       return Users.db
    }

    getUseBy_Id(_id){
      return  Users.db.find((user)=>{
            return user._id == _id
        })
    }

}

module.exports =  Users 
   