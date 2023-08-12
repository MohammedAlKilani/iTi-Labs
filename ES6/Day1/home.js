    var num1 = parseInt(prompt("number1"))
    var num2 = parseInt(prompt("number1"))   
function sum(num1,num2) {
    
    var myArray = num1+num2
    return myArray;
}

(function(yourArray) {
    alert(yourArray);
})(sum(num1,num2));


////////////////////////
const arrNumber = [1,2,3,4,5,6,7,8,9,10]
const oddArr =  arrNumber.filter((num)=>{
                     return num%2 ==0
                     })

        console.log(oddArr)
arrNumber.forEach((num)=>{
   console.log(num) 
})
const squareArr =  arrNumber.map((num)=>{
    return num*num
    })

    console.log(squareArr) 
    //////////////////////////
    let user ={
        age:1
    }
    console.log(user?.name)
    console.log(arrNumber.at(-1))
    console.log(arrNumber.at(0))
    console.log(arrNumber.at(-1))
    //////////////////
    for (const num of arrNumber) {
        console.log(num)
    }
    for (const i in arrNumber) {
        console.log(arrNumber[i])
    }
    
    console.log(...arrNumber)
////////////////////////////////////////
const tipArr = ["tip1","tip2","tip3","tip4","tip5","tip6","tip7","tip8","tip9","tip10"]

function *tipsFun(){
for (const i in tipArr) {
    // i++
    yield tipArr[i]
    
}

}
const itpsho =tipsFun()
const loopTip = document.getElementById("loopTip")
const tipGet = document.getElementById("tipGet")
loopTip.addEventListener("click",()=>{
    const stopInter = setInterval(()=>{
       let itpshoPrint = itpsho.next().value
        if(itpshoPrint){
            document.getElementById("tip").innerHTML = itpshoPrint
        }else{
            document.getElementById("tip").innerHTML = "tip is end"
            clearInterval(stopInter)
        }
        
    
    },3000)

})

tipGet.addEventListener("click",()=>{
    let itpshoPrint = itpsho.next().value
    if(itpshoPrint){
        document.getElementById("tip").innerHTML = itpshoPrint
    }else{
        document.getElementById("tip").innerHTML = "tip is end"    }
})


