class Store {
    constructor(){
      this.interestedArr = [] 
      this.products = [] 

    }
    addInterestedUser(user){
       this.interestedArr.push(user)
    }
    addProduct(product){
        this.products.push(product)
       this.notificationAllInterestedUser(product)
    } 
    removeInterestedUser(userRemov){
        this.interestedArr = this.interestedArr.filter(user=> user!=userRemov)
    }
    notificationAllInterestedUser(newProduct){
        this.interestedArr.forEach(function(user){
            user.notificatMe(newProduct)
        })
    }

}
class user{
    notificatMe(newProduct){
        console.log( `stor have new product : ${newProduct}`)
    }
    
}
const carStore = new Store()
const user1 = new user()
const user2 = new user()
carStore.addInterestedUser(user2)
carStore.removeInterestedUser(user2)
carStore.addInterestedUser(user1)
carStore.addProduct("car1") 

