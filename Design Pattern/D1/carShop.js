class Car{
    constructor(brand,price,carDoorNum){
        this.brand = brand
        this.price = price
        this.carDoorNum = carDoorNum
    }

}

class CarShop{
    constructor(brand){
        this.brand =brand
    }

    get carData(){
        switch (this.brand) {
            case "BMW":
                return new Car(this.brand,50000000,4)
                
            case "KIA":
                return new Car(this.brand,99990000000,2)
                
            case "Ford":
                return new Car(this.brand,10560000,2)
                
                
        
            
        }
    }
}
class DayDb{
    #db
    constructor(day){
       if(DayDb.day==day){

        return DayDb.dayDb
       } else{
        this.#db=[]
        this.day = day
        DayDb.day = day
        DayDb.dayDb = this
        return DayDb.dayDb 
       }
        
    }
    setDayDb(car){
        this.#db.push(car) 
    }
    get dayDb(){
        return this.#db
    }

}
class MyDB{
    #db
    constructor(){
        if(MyDB.db){
            return MyDB.db 
        }else{
           this.#db = [] 
           MyDB.db= this
           return MyDB.db
        }
    }
    set dbData(data){
        this.#db.push(data) 
    }
    get dbData(){
        return this.#db
    }
}

const car1 = new  CarShop("Ford")

const dayDb1 = new DayDb(1)
dayDb1.setDayDb(car1.carData)
////// 2 hour
const dayDb2 = new DayDb(1)
const car2 = new  CarShop("Ford")
dayDb2.setDayDb(car2.carData)
const myDb =new MyDB()
myDb.dbData = dayDb1.dayDb 
/////////////Day 2
const car3 = new  CarShop("KIA")
const dayDb3 = new DayDb(2)
dayDb3.setDayDb(car3.carData)

const myDb1 =new MyDB()
// dayDb1.setDayDb(car1)
myDb1.dbData = dayDb3.dayDb
// console.log(dayDb1.dayDb)
console.log(dayDb2.dayDb)
console.log(dayDb3.dayDb)
console.log(myDb.dbData)
console.log(myDb1.dbData)


