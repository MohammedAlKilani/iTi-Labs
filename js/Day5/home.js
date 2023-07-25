let userName = document.getElementById("name")

var password = document.getElementById("password")
var agree = document.getElementById("agree")
agree.addEventListener("change",(e)=>{
    if(e.target.checked){
    localStorage.setItem("userName",userName.value)
    localStorage.setItem("password",password.value)
    document.cookie = `username=${userName.value}`
    document.cookie = `password=${password.value}`
    }else{
        localStorage.clear()
    }
})
 var consolJson = document.getElementById("consolJson")
 var Student = {
    id:1,
    userName:"muhammed",
    age:25,
    address:null,
    skills:["js","html","css"],
    isleader:false
}
consolJson.addEventListener("click",()=>{
    console.log(JSON.stringify(Student))
})
var Students =[{
    id:1,
    userName:"muhammed",
    age:25,
    address:null,
    skills:["js","html5","css3"],
    isleader:false
},{
    id:2,
    userName:"ahmed",
    age:20,
    address:"minya",
    skills:["js","html","css"],
    isleader:false
},{
    id:3,
    userName:"ali",
    age:30,
    address:null,
    skills:["js","html","css"],
    isleader:false
}]
var consolStudents = document.getElementById("consolStudents")
consolStudents.addEventListener("click",()=>{
    for (let student of Students) {
        console.log(student.userName)
        for (let skill of student.skills) {
           console.log(skill) 
        }
        
    }
})

var AJAXUser= document.getElementById("AJAXUser")
var userNameLest= document.getElementById("userNameLest")
var userImg  = document.getElementById("userImg")
var userEmail = document.getElementById("userEmail")
var dataServer 
var xhttp = new XMLHttpRequest()
    xhttp.open("Get", "https://reqres.in/api/users", true)
    xhttp.send()
 xhttp.onreadystatechange = function (){
    if (this.status == 200 && this.readyState == 4) {
         dataServer = JSON.parse(this.responseText)
        for (let user of dataServer.data) {
        var userName = document.createElement("option")
        var userNameText = document.createTextNode(user.first_name+" "+user.last_name)
        userName.appendChild(userNameText)
        userNameLest.appendChild(userName)
        
            
        }
        

    }

 } 
 userNameLest.addEventListener("change",(ev)=>{
  var user = dataServer.data.find((e)=>{
        


        return ((e.first_name+" "+e.last_name)==ev.target.value)
    })
    var xhttp = new XMLHttpRequest()
 xhttp.open("Get", `https://reqres.in/api/users/${user.id}`, true)
 xhttp.send()
xhttp.onreadystatechange = function (){
    if (this.status == 200 && this.readyState == 4) {
        var dataUserServer = JSON.parse(this.responseText)
    userImg.src = dataUserServer.data.avatar
    userEmail.innerHTML =  dataUserServer.data.email
    }

}

 })   
 



