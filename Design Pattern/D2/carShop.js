class Truck  {
    constructor(step1,step2){
        this.step1 = step1
        this.step2 = step2
            this.type= "truck"
    }
}
class Car  {
    constructor(step1,step2){
        this.step1 = step1
        this.step2 = step2
        this.type= "car"
    }
}
class carBuilder{
    
   setStep1(step1){
        this.step1 =  step1
       return this
    }  
   setStep2(step2){
    this.step2 =  step2
    return this
    }
    builderTruck(){
        return new Truck(this.step1,this.step2)
    }
    builderCar(){
        return new Car(this.step1,this.step2)
    }
}

const car = new carBuilder().setStep1("car Step1").setStep2("car step2").builderCar()
console.log(car)