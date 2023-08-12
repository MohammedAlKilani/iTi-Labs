$(document).ready(function(){
   var decrease = $("#decrease")
   var increase = $("#increase")
   var content = $(".content")
   var i = 16
    content.css("font-size",`${i}px`)
   
   increase.click(
    function(){
        if(i>50){
            $(".error").html("Max value")
        }else{
            $(".error").html("")
            content.css("font-size",`${++i}px`)
        }
        
    }
   )
   decrease.click(
    function(){
        if(i<10){
            $(".error").html("Minemam value")
        }else{
            $(".error").html("")
            content.css("font-size",`${--i}px`)
        }
        
    }
   )

})