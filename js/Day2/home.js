window.addEventListener("load",()=>{


    try{
    var tip = ["tip 1","tip 2","tip 3"] ;
    document.getElementById("tip").innerHTML = tip[Math.floor(Math.random()*tip.length)];
    //////////////////////

    document.getElementById("dateToDayButton").addEventListener("click",()=>{
        document.getElementById("dateToDay").innerHTML = (new Date()).toLocaleString()

    }) 

    ///////////////////////


//    var email = prompt("your email");
//  if(!(typeof email == "string")){alert("not valid")
// }else{
//   var indA = email.indexOf("@");

//    if(indA==-1||indA==0||indA==email.length -1){
//     alert("not valid")
//   }else{
//     alert("valid data")
//   }
//  }

 /////////////////////////

 document.getElementById("nameEmailButton").addEventListener("click",()=>{
    var userName = prompt("userName Address");
    var userNameRexp = /^[a-z]{4,}\s[a-z]{4,}(\s[a-z]{4,})*$/i
    userNameRexp.test(userName)?alert("valid userName") :alert("not valid userName");


 var emailAddress = prompt("email Address");

var emailAddressRexp = /.(.eg)$/i

emailAddressRexp.test(emailAddress)?alert("valid email Address") :alert("not valid email Address");
 })


///////////////////////
 var arrGrades =[60, 100,10,15,85];
  var sortArrGrades =arrGrades.sort((a, b)=>{
    return b-a;
  })

 console.log(arrGrades.find((grad)=>{
    return(grad<=100)
 }),arrGrades) 
 

 console.log(arrGrades.filter((grad)=>{
     return(grad<60)
 })) 

 //////////////////////
var student =[
    {sName:"muhammed",grad:60},
    {sName:"ahmed",grad:100},
    {sName:"aly",grad:10},
    {sName:"student",grad:15}
    
]


 console.log(student.find((stud)=>{
   return (stud.grad>=90&&stud.grad<=100)
 }).sName)


student.filter((stud)=>{
   return(stud.grad<60) 
 }).forEach((stud)=>{
    console.log(stud.sName)
 })

student.push({sName:"stud",grad:50})

for(studIND in student){
    console.log(student[studIND]);
}
student.pop()
   
for(studIND of student){
    console.log(studIND);
}


student.sort((a, b) => {
    const nameA = a.sName.toUpperCase(); 
    const nameB = b.sName.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    
    return 0;
  })


console.log(student)
// student.splice(1, 0, {sName:"stud2",grad:60}, {sName:"stud3",grad:70})
// console.log(student)

student.splice(3, 1)
console.log(student)


///////////////////////

document.getElementById("showDate").addEventListener("click",()=>{
 var userIn =  prompt("Date DD – MM – YYYY");
 var userInArr =  userIn.split("-");
//  console.log(userInArr)


 (()=>{
    var fristInd =userIn.indexOf("-")
    var lastInd = userIn.lastIndexOf("-")
  if(fristInd==2&&lastInd==5&&userIn.length==10) {
    
    
    (()=>{document.getElementById("showDateSpan").innerHTML = (new Date(userInArr[2],userInArr[1]-1,userInArr[0]-1)).toLocaleString() })()
  }else{
    console.log(userIn ,userIn.indexOf("-") ,userIn.lastIndexOf("-"),userIn.length ,fristInd,lastInd=="5",userIn.length==10);

    alert(" Wong Date Format")}
    
  
    
 })()




})



    }catch(err){
        console.log(err)
    }









})

    


