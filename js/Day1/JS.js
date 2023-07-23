alert("Welcome to my site");



   var name = prompt("enter your name");
   document.write(`welcome ${name}`);
   

// //////
    function sumNum (){
        var num1 = parseInt(document.getElementById("num1").value) 
        var num2 = parseInt(document.getElementById("num2").value)
        var resalt = num1+num2
       document.getElementById("reset").innerHTML = resalt
    }
    
    
    document.getElementById("sum").addEventListener("click", sumNum);
/////////////////////////
    function temp (temp){
        
       console.log(temp>=30?"hot":"cold") 
    }  
    
    
    
   document.getElementById("temp").addEventListener("change",(e)=>{temp(e.target.value)} );
   

///////////

document.getElementById("temp2").addEventListener("click",prompTemp2 );

function temp2 (temp,tempFeel){
        
    if (temp<=30&&temp>=25&&tempFeel<=30&&tempFeel>=25){
        console.log("normal")
    }else if(temp<25&&tempFeel<25){
        console.log("cold")

    }else if(temp>30&&tempFeel>30){
        console.log("hot")
    }else{
        console.log("Ambiguous, can’t detect")
    }
 }
function prompTemp2(){ 
    var temp = prompt("Temperature")
    var tempFeel = prompt("Actual feel temperature")
    temp2 (temp,tempFeel)

   }
///////
document.getElementById("faculty").addEventListener("change",(e)=>{faculty(e.target.value)} );
document.getElementById("facultySpan")

function faculty(faculty){

    switch(faculty){
        case "FCI":
            console.log("You’re eligible to Programing tracks")
            break;
        case "Engineering":
            console.log("You’re eligible to Network and Embedded tracks")
            break;
        case "Commerce":
            console.log("You’re eligible to ERP and Social media tracks")
            break;
        default:
            console.log("You’re eligible to SW fundamentals track")

            break;

            

    }

}
///////////////////

document.getElementById("odd").addEventListener("click",oddprom );

function oddprom(){
    var nums = prompt("num Start")
    var nume = prompt("num End")
    oddNum(nums,nume)

}
function oddNum (numStart,numEnd){
    for(let i=numStart; i<=numEnd ;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}


   //////////////
do{
 var name2 = prompt("enter your name")

}while(typeof(name2)!= "string")
do{
 var Birth = prompt("enter your Birth year")
}while(Birth>2010)

document.getElementById("name").innerHTML=name2
document.getElementById("Birth").innerHTML=Birth
document.getElementById("Age").innerHTML= (2023-Birth)
/////////////////
document.getElementById("table").innerHTML= `<table>
<tr>
    <th>Name:</th>
    <td>${name2}</td>
</tr>
<tr>
    <th>Birth year:</th>
    <td>${Birth}</td>
</tr>
<tr>
    <th>Age:</th>
    <td>${2023-Birth}</td>
</tr>
</table>`

// // ////////////////

document.getElementById("h1to6").addEventListener("click",(e)=>{
    for(let i=1;i<=6;i++){
        document.write(`<h${i}> welcome to my page <h${i}> <br>`)
    }
})
////////
 function closs (id){
    document.getElementById(id).style.display = "none"
 }
//  //////////////////////////
 document.getElementById("expression").addEventListener("click",expression)
 function expression (){
var expression = prompt()

_eval (expression)

 

 }
 
function _eval (expression){
        console.log(eval(expression))

}



 
   

