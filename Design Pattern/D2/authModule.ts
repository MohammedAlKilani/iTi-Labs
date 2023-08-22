interface request{
    jwt:string
}
interface dbInter{
    db:any[],
    pushInDb(date:any):void
}
interface respons{
    forbidden:number,
     ok:number
}


class Database implements dbInter{
    
    static db = []
   get db():any[]{
    return Database.db
   }
   pushInDb(date:any){
     this.db.push(date)
   }

}
class Res implements respons {
   get forbidden(){
        return 403
    }
  get  ok(){
        return 200
    }
}
class Authenticat{
    
    constructor(public req:request , private res :respons,private dbAuthenticat:dbInter){

    }
    set db(db:dbInter){
            this.dbAuthenticat ==  db
            
    }
    
   

    get respons():number{
       if(this.findAut(this.req.jwt)){
        return this.res.ok
       } else{
        return this.res.forbidden
       }
    }
    
    private findAut(reqAuth:string){
    const auth  =  this.dbAuthenticat.db.find((auth:string)=>{
                return auth == reqAuth
        })
        return auth
    }


}
class Req implements request {
   
  constructor(public jwt:string){
    
  }  
    
}
const db1= new Database()
db1.pushInDb("1235adfgh")
const res = new Res()
const request1 = new Req("1235adfgh")
const auth1 = new Authenticat(request1,res,db1)
console.log(auth1.respons) 
const request2 = new Req("1235")
auth1.req=request2
// const auth2 = new Authenticat(request2,res,db1)
console.log(auth1.respons) 