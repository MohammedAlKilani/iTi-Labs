
class CEO{
    
    constructor(ceoName,age,address){
        if(!CEO.create){
            this.ceoName = ceoName
            this.age =  age
            this.address = address
            CEO.create = this
            
        }else{
            return CEO.create
        }

    }

    get ceoData(){
        return `Name : ${this.ceoName} , Age : ${this.age} , Address : ${this.address}`
    }
}

const ceo1 = new CEO("muhammad",45,"minya")
console.log(ceo1.ceoData) 
const ceo2 = new CEO("Ali",50,"samanod")
console.log(ceo2.ceoData) 
