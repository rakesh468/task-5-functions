let a=5;
function addfive(add){
    return a+add; 
}
var result=addfive(5)
var result1=addfive(0)
var result2=addfive(-5)
console.log(result);
console.log(result1);
console.log(result2);

// find the perimeter of a rectangle//
function perimeter(num1,num2){
    return 2*(num1+num2)
}
let rectangle=perimeter(6,7)
console.log(rectangle);

// Less Than 100?//
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false//
const value=(num1,num2)=>{
    if(num1+num2<100){
        return true;
    }
    else{
        return false;
    }
}
console.log(value(22,34));
// convert minutes to seconds//
var min=6;
function second(min){
    return min*60;
}
var sec= second(6);
console.log(sec)

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.//
var myint=8;
function nextnumber(myint){
    return (myint+1)
}
var myNextint=nextnumber(8);
console.log(myNextint)

// Convert Hours into Seconds//
var arr = [1, 2, 3];
function hourToSeconds(arr) {
    return(arr*3600);
}
var data = hourToSeconds(2)
console.log(data)

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.//
function remainder(num1,num2) {
    return (num1/num2)
}
var res = remainder(1,3)
console.log(res)

// MacDonald is asking you to tell him how many legs can be counted among all his animals.//
function CountAnimals(tur,horse,pigs) {
    return (tur*2)+(horse*4)+(pigs*4)
}
var legs = CountAnimals(2,3,5)
console.log(legs)

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(num1,num2) {
    return (num1*num2*60)
}
var fps = frames(1,2)
console.log(fps)

// Create a function that returns true if an integer is evenly divisible by 5, and false// 
function divisibleByFive(num1) {
    if(num1 %5 ===0){
        return true;
    }
    else{
        return false;
    }
}
var divisible = divisibleByFive(5)
console.log(divisible);

// Given a number, “isEven” returns whether it is even.
function isEven(num){
    if(num%2===0){
        return true;
    }else{
        return false;
    }
   }
   var even = isEven(2)
   console.log(even);

//    Write a function called “getFullName”.
//    Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
 function getFullName(firstname,lastname){
    return(`"${firstname} ${lastname}"`)
}
let z =getFullName("GUVI","GEEK")
console.log(z);   

// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1){
    return (word1.length)
   }
   let solution=getLengthOfWord("GUVI")
   console.log(solution);

// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
const arr2=  [2,3,4,5,6,7,8]
function lastelement(array){
       let element=array[array.length-1]
       return element;
   }
   console.log(lastelement(arr2))

































   