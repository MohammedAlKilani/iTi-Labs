$(document).ready(function(){

    $(".box").animate({left:"300px",width:"200px",height:"200px"},1000,function(){
         $(".box").css("background-color","blue")
         $(".box").animate({top:"300px",width:"100px",height:"100px"},1000,function(){
            $(".box").css("background-color","yellow")
            $(".box").animate({left:"0px",width:"200px",height:"200px"},1000,function(){
                $(".box").css("background-color","green")
                $(".box").animate({top:"0px",width:"100px",height:"100px"},1000,function(){
                    $(".box").css("background-color","red")
                })

            })
         })
    })
   
 
})