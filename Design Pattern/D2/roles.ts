

class User{
   private rolesArr: string[]
    constructor(public max :number , public min :number,  arrRoles :string[]){
        if(arrRoles.length < min ){
            throw "rolesArr is lower min" 
        }else if(arrRoles.length>this.max){
            throw "rolesArr is Bigger max"
        }
       this.rolesArr =arrRoles
    }
    set role(roles: string){
        if(this.rolesArr.length>=this.max){
            throw "rolesArr is full"
        }
        this.rolesArr.push(roles)
    }
    get roles(){
      return  this.rolesArr
    }
}
function checkingRole(user:User,roleToFind:string){
    const find = user.roles.find(role =>role==roleToFind )
    if(find){
        return "true"
    }else{
        return "false"
    }
}

const user1 = new User(15,5,["do1","do2","do3","do4","do5"])

console.log(checkingRole(user1,"do6")) 