 var colorArr = ["red","blue","green","orange"]  
    var i = 1
    var j = i-1
$(document).ready(function () {
   
    $("div").click(boxGenerator)
    $("div").hover(()=>{
        $("div").css("background-color",`${colorArr[i]}`)
      });
      
    $("div").mouseleave(function(){
        
        
       
        $("div").css("background-color",`${colorArr[j]}`)
      });
});
function boxGenerator(){
   
   
    if(i==colorArr.length){
        i=0
    }

  var ele =  jQuery("<div>")
  
  ele.addClass(`${colorArr[i]}`);
  ele.hover(()=>{
    ele.css("background-color",`${colorArr[i]}`)
  });
  ele.click(boxGenerator);
 ele.hover(()=>{
    var j
    if(i==colorArr.length){
    j=0
}else{
    j=i
}
  
   ele.css("background-color",`${colorArr[j]}`)
  });
  
  ele.mouseleave(function(){
    var j
    if(i==colorArr.length){
    j=3
}else{
    j=i-1
}
  
   ele.css("background-color",`${colorArr[j]}`)
  });
  
  $(this).after(ele)
   
 
  if(i==0){
   
    $(this).css("background-color",`${colorArr[colorArr.length-1]}`)
   
  }else{


      $(this).css("background-color",`${colorArr[i-1]}`)
  }
  ++i
 

  $(this).off() 
}