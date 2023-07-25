window.addEventListener("load",()=>{
    let setIntervalDate
    document.getElementById("clockButton").addEventListener("click",(e)=>{
        e.preventDefault()
        setIntervalDate = setInterval(()=>{
            document.getElementById("clock").innerHTML = new Date().getHours()+":" + new Date().getMinutes() + ":" + new Date().getSeconds()

        },1000)
    })
   document.addEventListener("keydown",(e)=>{
        if(e.altKey&&e.key=="w"){
clearInterval(setIntervalDate)
        }

//         if(e.key=="w"){
// clearInterval(setIntervalDate)
//         }
    })

document.querySelector("#textChar").addEventListener("keydown",(e)=>{
    
    e.stopPropagation()
    
    if(!(/[a-zA-Z]/.test(e.key))){
        
        e.preventDefault()
    }
})


})
