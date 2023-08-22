interface FootballGame {
    shootBall():string,
    jump():string
}

class attack implements FootballGame{
     shootBall(){
        return "shoot Ball attack "
    }
    jump(){
        return "jump Ball attack "
    }
} 
class defence implements FootballGame{
     shootBall(){
        return "shoot Ball attack "
    }
    jump(){
        return "jump Ball defence" 
    }
} 
class  meduim implements FootballGame{
     shootBall(){
        return "shoot Ball shootBall "
    }
    jump(){
        return "jump Ball jump" 
    }
}
class FootballGameStrategy{
    
    constructor(public strategy:FootballGame){
        
    }
    shootBall(){
        console.log(this.strategy.shootBall())
    }
    jump(){
        console.log(this.strategy.jump())
    }
}
const gameStrategy = new attack()
const game = new FootballGameStrategy(gameStrategy)
game.jump()
game.shootBall()