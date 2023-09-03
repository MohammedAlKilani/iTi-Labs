function yearToDay(year){

    if(isNaN(year)) return "400 Bad Request 'year not number'"
    let day = year*365.242199
    return day
}

console.log(yearToDay(25)) 
console.log(yearToDay("25")) 
console.log(yearToDay("25jj")) 
