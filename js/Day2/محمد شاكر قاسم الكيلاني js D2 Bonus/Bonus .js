window.addEventListener("load",()=>{
    document.getElementById("Day").addEventListener("click",()=>{
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("spanDay").innerHTML= weekday[new Date(document.getElementById("textDay").value).getDay()]
    }) 

    document.getElementById("phon").addEventListener("click",()=>{
     var phon = document.getElementById("textphon").value
     var phonRexp = /^(002)((010)|(012)|(011))(\d){8}$/
     phonRexp.test(phon)?document.getElementById("spanphon").innerHTML="valed" :document.getElementById("spanphon").innerHTML="Not valed"
    
    }) 



    document.getElementById("Age").addEventListener("click",()=>{
        // try{
            var barthDay = new Date(document.getElementById("textAge").value)
            
   if(isNaN(barthDay)){
    throw "not valed date"
   }
        
        var today = new Date()
        var day = today.getDay()-barthDay.getDay()
        var Month = today.getMonth()-barthDay.getMonth()
        var Year = today.getFullYear()-barthDay.getFullYear()
        if(day< 0){
            day = 30+day
            Month = Month-1
        }
        if (Month<0) {
            Month = 12+Month
            Year = Year -1 
        }

        document.getElementById("spanAge").innerHTML= `Day ${day} Months ${Month} year ${Year} `
        var color =[]
        color["r"]="red"
        color["b"]="blue"
        color["g"]="green"
        document.getElementById("spanAgeColor").style.color = color[document.getElementById("color").value]
        document.getElementById("spanAgeColor").innerHTML = barthDay.toLocaleString()
    // }catch(err){
    //     alert(err)
    // }

        
        })
        window.addEventListener("error",(e)=>{
            e.preventDefault()
            alert(e.error)
        }) 



})
