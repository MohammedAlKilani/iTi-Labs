interface ship {
    pickupdate: Date,
    deliverydate: Date,
    commodities: string,
    shipfrom: string,
    shipto: string,
    type:string
    
}
interface shipClass{
    new (pickupdate: Date,
        deliverydate: Date,
        commodities: string,
        shipfrom: string,
        shipto: string,
        ):Air
}
class Playground implements ship {
    private typeShip: string = "Playground"
    constructor(public pickupdate: Date,
        public deliverydate: Date,
        public commodities: string,
        public shipfrom: string,
        public shipto: string) {


    }

    get type(){
        return this.typeShip
    }
    
    
}
class Air implements ship {
    private typeShip: string = "Air"
    constructor(public pickupdate: Date,
        public deliverydate: Date,
        public commodities: string,
        public shipfrom: string,
        public shipto: string) {
    

    }
    get type(){
        return this.typeShip
    }
}

class Shipment {
    private pickupdate: Date 
    private deliverydate : Date
    private commodities :string
    private shipfrom : string
    private shipto :string
    setpickupdate(pickupdate:Date){
        this.pickupdate =pickupdate
        
    }
    setDeliverydate(deliverydate:Date){
        this.deliverydate = deliverydate
        
    }
setCommodities(commodities:string){
 this.commodities= commodities
 
}
setShipfrom(shipfrom:string){
this.shipfrom =shipfrom

}
setShipto(shipto:string){
    this.shipto =shipto
    
}


shipBy(shipBy:shipClass) {
    return new shipBy( this.pickupdate,
         this.deliverydate,
         this.commodities,
         this.shipfrom,
         this.shipto)
}
}

const shipment = new Shipment()
shipment.setpickupdate(new Date())
shipment.setDeliverydate(new Date("2023-10-09"))
shipment.setCommodities("Commod")
shipment.setShipfrom("minya")
shipment.setShipto("samanod")
console.log(shipment.shipBy(Air)) 