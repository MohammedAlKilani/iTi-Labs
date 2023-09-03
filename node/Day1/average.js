let numbers = [25,20,30,35]

function average(...numbersArr){
    if(numbersArr.length===0) return "400 Bad Request 'please add number'"
    let sum = 0
    for (const number of numbersArr) {
        sum+=number
    }
    let av = sum/numbersArr.length
    return av
}

console.log(average(...numbers))
console.log(average())


console.log( [ ] == [ ] ) // false
console.log( { } == { } ) // false

function main() {
    console.log("A");
    setTimeout(function print() {
    console.log("B");
    }, 0);
    console.log("C");
    }

    // main() //A C B


//     var num = 8;
// var num = 10;
// console.log(num); // 10

function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Ayush';
    let age = 21;
    }
    // sayHi(); // undefined , error