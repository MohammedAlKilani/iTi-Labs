var xhttp = new XMLHttpRequest()
    xhttp.open("Get", "https://fakestoreapi.com/products", true)
    xhttp.send()
 xhttp.onreadystatechange = function (){
    if (this.status == 200 && this.readyState == 4) {
        var dataServer = JSON.parse(this.responseText)
        for (let brodact of dataServer) {
            var brodactName = document.createElement("option")
            var brodactlabel = document.createElement("label")
            var brodactImg = document.createElement("img")
            var brodactAdd = document.createElement("input")
            var brodactDetels = document.createElement("input")
            var brodactNameText = document.createTextNode(brodact.title)
            var brodactlabelText = document.createTextNode(`$ ${brodact.price}`)
            
            
            brodactName.appendChild(brodactNameText)
            brodactlabel.appendChild(brodactlabelText)
            /////////////////
            brodactAdd.value = "Add to "
            brodactAdd.type ="button"
            brodactAdd.addEventListener("click",()=>{
                // localStorage.clear()
                let arrId =[]
                let arrIdLocal =localStorage.getItem("userLest")
                
                
                if(arrIdLocal){
                    let arrIdUser =JSON.parse(localStorage.getItem("userLest")) 
                    
                  let findEle =  arrIdUser.find((ele)=>{
                    

                       return ele == brodact.id
                    })
                    
                    console.log(findEle)
                    if(findEle){
                        console.log("in")
                        arrId =[...arrIdUser]
                    }else{
                        console.log("in 1")
                       arrId =[...arrIdUser,brodact.id] 
                    }
                    
                }else{
                    
                arrId =[brodact.id]   

                }
                   location.href = "user brodact.html"
                localStorage.setItem("userLest",`${JSON.stringify(arrId)}`)
             
            })
            /////////////////
            brodactDetels.value = "Detels "
            brodactDetels.type ="button"
            brodactDetels.addEventListener("click",()=>{
                localStorage.setItem("idDetels",JSON.stringify(brodact.id))
                location.href = "brodact.html"
            })
            /////////////////
             brodactImg.src = brodact.image
             brodactImg.style.width = "200px"
             brodactImg.style.height = "200px"
             var brodactsDiv = document.createElement("div")
             
             brodactsDiv.appendChild(brodactName)
             brodactsDiv.appendChild(brodactImg)
             brodactsDiv.appendChild(brodactlabel)
             brodactsDiv.appendChild(brodactAdd)
             brodactsDiv.appendChild(brodactDetels)
             document.body.appendChild(brodactsDiv)
             
            
                
            }
        
    }
 }