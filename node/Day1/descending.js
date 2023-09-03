function descending(...numArr){
    const descendingArr =[]
    if(!numArr.length)return "400 Bad Request 'please add number'"
    while(numArr.length){
        let numToPush =0
        for (const i in numArr) {
            // console.log(numArr)
            if(numArr[i]<0 || isNaN(numArr[i])) return "400 Bad Request 'numArr not Arr of number non-negative'"
            if(numArr[i]>numToPush){
                numToPush = numArr[i]
            }
        }
        let index = numArr.indexOf(numToPush)
      numArr.splice(index,1)  
        descendingArr.push(numToPush)

    }
    return descendingArr
}

console.log(descending(6,7,8,9,1,5)) 
console.log(descending(6,7,8,9,-1,5)) 
console.log(descending(6,7,8,9,"jj",5)) 