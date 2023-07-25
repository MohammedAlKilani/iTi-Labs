window.addEventListener("load", () => {
    let userName = document.getElementById("name")
    var nameValid = false
    var passwordValid = false
    let gender = document.getElementById("gender")


    userName.addEventListener("focus", () => {
        userName.style.border = "solid 1px blue"

    })

    userName.addEventListener("blur", (e) => {
        var nameRex = /^[a-zA-Z]{3,}$/
        var invalid = document.getElementById("inValid")
        var nameRexBool = nameRex.test(userName.value)
        nameValid = nameRexBool

        if (!nameRexBool) {
            userName.focus()
            invalid.innerHTML = "invalid name"
            invalid.classList.add("not-valid")
            userName.style.background = "gray"
            nameValid = false

        } else {
            nameValid = true
            userName.style.background = "white"
            invalid.classList.add("valid")
            userName.style.border = ""
            invalid.innerHTML = ""
        }


    })

    var password = document.getElementById("password")
    var passwordRepeat = document.getElementById("passwordRepeat")
    var passwordRepeatDiv = document.getElementById("passwordRepeatDiv")

    passwordRepeat.addEventListener("blur", () => {
        if (password.value == passwordRepeat.value) {
            password.style.background = "white"
            passwordRepeat.style.background = "white"
            passwordRepeatDiv.innerHTML = ""
            passwordValid = true
            passwordRepeatDiv.classList.add("not-valid")
        } else {
            passwordRepeat.style.background = "gray"
            password.style.background = "gray"
            passwordRepeatDiv.innerHTML = "password and repeat password should be the same"
            passwordValid = false
            passwordRepeatDiv.classList.add("not-valid")

        }
    })
    var formDiv = document.getElementById("formDiv")
    document.forms[0].addEventListener("submit", (e) => {
        e.preventDefault()
        if (nameValid && passwordValid) {
            console.log("11111111")
            
            formDiv.innerHTML = ""
            location.href = `name.html?user_name=${userName.value}&gender=${gender.value}`
        } else {
            
            formDiv.innerHTML = "Plz correct the validation errors first."

        }



    })

    //starssssssss
    var starsLable = document.getElementById("stars")
    var divS = document.getElementById("divS")
    starsLable.addEventListener("click", () => {

        for (let i = 0; i <= 5; i++) {
            var span = document.createElement("span")
            span.style.background = "#ffd700"
            span.style.width = "20px"
            span.style.height = "20px"
            span.style.marginLeft = "2px"
            span.innerHTML = "&#9733"
            span.id = `S${i}`



            divS.appendChild(span)
        }
        divS.childNodes.forEach((e) => {



            e.addEventListener("mouseover", () => {
                e.addEventListener("mouseleave", mouseleaveStar)
                document.querySelectorAll("#divS span").forEach((e) => {
                    e.style.background = "gray"
                })
                e.style.background = "#ffd700"
                document.querySelectorAll("#divS span:hover~span").forEach((e) => {
                    e.style.background = "#ffd700"
                })

            })
            e.addEventListener("mouseleave", mouseleaveStar)
            function mouseleaveStar() {

                document.querySelectorAll("#divS span").forEach((e) => {
                    e.style.background = "gray"
                })



            }
            e.addEventListener("click", () => {
                e.removeEventListener("mouseleave", mouseleaveStar)
                e.style.background = "#ffd700"
                document.querySelectorAll("#divS span:hover~span").forEach((e) => {
                    e.style.background = "#ffd700"
                })
            })
        })


    })
/////////////////////
   var searchBox = document.getElementById("searchBox")
   let widthI = 20
   let widthFirst = searchBox.style.width
   var stopSearchFocus

   console.log(searchBox.style.width)
   searchBox.addEventListener("focus",searchFocus)
   searchBox.addEventListener("blur",searchblur)
   function searchFocus(){
  stopSearchFocus = setInterval(()=>{
        let searchBox = document.getElementById("searchBox")
    searchBox.style.width = `${widthI}%`
    widthI += 3
    if(widthI>100){
        clearInterval(stopSearchFocus)
    }
   
   },30)
   }
//    searchBox.addEventListener("blur",()=>{
    
//     widthI = 20
//    })
   function searchblur(){
    clearInterval(stopSearchFocus)
 var stopSearchblur = setInterval(()=>{
        let searchBox = document.getElementById("searchBox")
    searchBox.style.width = `${widthI}%`
    widthI -= 3

    if(widthI<10){
        
        clearInterval(stopSearchblur)
        
    }
   
   },30)
   }


    
////////////////////  sea password
var eyePassword  = document.getElementById("eyePassword")
var eyePasswordRepeat = document.getElementById("eyePasswordRepeat")

eyePassword.addEventListener("click",(e)=>{
    closOpenEye(e.target,password)
    
})
eyePasswordRepeat.addEventListener("click",(e)=>{
    closOpenEye(e.target,passwordRepeat)
})

function closOpenEye (element,password){

    
    if(element.value=="👁"){
        element.value=""
         password.type = "text"
    }else{
        element.value="👁"
        password.type = "password"
    }
   
}
/////////////////////////
document.getElementById("agree").addEventListener("change", (e) => {
    if(e.target.checked){
let newWin2
    
   
        newWin2 = open()
  
   let tex = `  Lorem ipsum dolor sit amet, consectetur ad
     a non, voluptatem recusandae quos sed doloribus numquam rem qui aspernatur nemo illum cumque eius accusantium ipsum mollitia ducimus? Laborum, dolorem.<br>
     ` 
   for(var i = 1; i <= 50; i++){

    tex += `  Lorem ipsum dolor sit amet, consectetur ad
    a non, voluptatem recusandae quos sed doloribus numquam rem qui aspernatur nemo illum cumque eius accusantium ipsum mollitia ducimus? Laborum, dolorem.<br>
    `
   }
     newWin2.document.body.innerHTML = tex
     if(newWin2.document.body.scrollTop ==(newWin2.document.body.scrollHeight - newWin2.innerHeight)){
        console.log("hi 1")
        
     }
     
    

 newWin2.setInterval(()=>{
    newWin2.scrollBy(0,100)
 
   if(newWin2.document.body.scrollTop ==(newWin2.document.body.scrollHeight - newWin2.innerHeight)){
    newWin2.close()
    
 } 
 },500)

    }

    
})
})

