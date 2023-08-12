$(document).ready(function () {
 
    $("#add").click(function(){
        var trNew =  jQuery("<tr>")
   var tdName =  jQuery("<td>")
   var tdAge =  jQuery("<td>")
   var tdDelet =  jQuery("<td>")
   var delet =  jQuery("<button>")
   var usrName = $("#name").val()
   var usrAge = $("#age").val()
    delet.html("Delet")
    delet.click(()=>{
        trNew.hide()  
    })
   tdName.html(usrName)
   tdAge.html(usrAge)
   tdDelet.append(delet)
   trNew.append(tdName)
   trNew.append(tdAge)
   trNew.append(tdDelet)
   $("#persons-list tbody").append(trNew)
})
///////

$("#search").click(function(){
   var searchText = $("#search-item").val()
   $("#persons-list tbody tr").filter(function(){
 if(($(this).text().toLowerCase().indexOf(searchText) === -1)){
 $(this).hide()
 } 
   
    
   })
    
   });
})


    
   