function smallestNumber(...numArr){
 if(!numArr.length) return "400 Bad Request 'please add number'"
 let smallNum = numArr[0]
 for (const num of numArr) {
     if(isNaN(num)) return "400 Bad Request 'numArr not Arr of number'"
    if(num<smallNum){
        smallNum=num
    }
    
 }
 return smallNum
}

console.log(smallestNumber(5,-1,5,6,-40,"k")) 
console.log(smallestNumber(5,-1,5,6,-40)) 