addEventListener("load",()=>{
var galleryImg = document.getElementById("galleryImg")
var next = document.getElementById("next")
var Prev = document.getElementById("Prev")
var imgDescription = document.getElementById("imgDescription")
imgDescription.style.visibility ="hidden"
setSrc()
 galleryImg.addEventListener("mouseover",()=>{
    imgDescription.style.visibility ="visible"
    galleryImg.style.opacity ="0.3"

})
var stopSetI 
var onLoob = false
var i = 0
var arrImg = ["./img/linkedin.png","./img/Facebook-icon.png","./img/google+.png","./img/twitter.png"]
function setSrc (){
    
    

    
    
    var arrDescription = ["linkedin","Facebook-icon","google+","twitter"]
   stopSetI= setInterval(()=>{
        if(i<arrImg.length){
           galleryImg.setAttribute("src",arrImg[i])
           
            imgDescription.innerHTML = arrDescription[i]

           
           i++
        }else{
            i=0
        }
        
        onLoob =true
    },500)

        


}

 galleryImg.addEventListener("mouseleave",()=>{
    // clearInterval(stopSetI)
    imgDescription.style.visibility ="hidden"
    onLoob = false
    galleryImg.style.opacity ="1"
})  
 next.addEventListener("mouseover",()=>{
    clearInterval(stopSetI)
    
})  
 Prev.addEventListener("mouseover",()=>{
    clearInterval(stopSetI)
    
})  
 next.addEventListener("mouseleave",()=>{
    setSrc()    
})  
 Prev.addEventListener("mouseleave",()=>{
    setSrc()    
})  
next.addEventListener("click",()=>{
    if(i==0){
        galleryImg.setAttribute("src",arrImg[0])
    }else{
        galleryImg.setAttribute("src",arrImg[--i])
    }
})
Prev.addEventListener("click",()=>{
    if(i==arrImg.length-1){
        galleryImg.setAttribute("src",arrImg[arrImg.length-1])
    }else{
        galleryImg.setAttribute("src",arrImg[++i])
    }
})
   
var buttonGallery = document.getElementById("buttonGallery")
buttonGallery.addEventListener("click",()=>{
    if(onLoob){
        clearInterval(stopSetI)
        onLoob=false
    }else{
      setSrc()
    onLoob =true  
    }
    
})  
var buttonAdd =document.getElementById("buttonAdd")
var buttonRemov =document.getElementById("buttonRemov")
var divGallery =document.getElementById("divGallery")
var imgAdd
var imgAddArr = []
buttonAdd.addEventListener("click",()=>{
     imgAdd = document.createElement("img")
    imgAdd.setAttribute("src","./img/twitter.png")
    divGallery.appendChild(imgAdd)
    
})
buttonRemov.addEventListener("click",()=>{
   console.log(divGallery.childNodes.forEach((e)=>{
    if(e.id===""){
        imgAddArr.push(e)
        
    }
   

   }))
    console.log(imgAddArr)
    var len= imgAddArr.length-1
    divGallery.removeChild(imgAddArr[len] )
    
})
/////////////////////////D and D
var div1 = document.getElementById("div1")
var drag1 = document.getElementById("drag1")
drag1.addEventListener("dragstart",drag)
div1.addEventListener("drop",drop)
div1.addEventListener("dragover",allowDrop)
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    div1.style.background = "green"
  }


 })
 
