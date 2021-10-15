// Print odd numbers in an array//
var numbers=[1,2,3,4,5,6,7,8,10]
oddnumbers=numbers.filter(function(item){
    return(item % 2 !== 0)
});
console.log(oddnumbers);

// Return all the prime numbers in an array//
var numarray=[2,3,4,5,6,7,8,9,10]
numarray=numarray.filter(function(number){
    for(i=2;i<=Math.sqrt(number);i++){
        if(number % i ===0) return false;
    }
    return true;
})
console.log(numarray);

// Sum of all numbers in an array//
var numbers=[1,2,3,4,5,66,7,8,9,10]
var sum=numbers.reduce(function(a,b){
    return a+b;
},0);
console.log(sum);

// Remove duplicates from an array//
let animals = ["Lion", "Rabbit", "Mouse", "Monkey", "Lion","Ape"]  
let duplicate = function(item,index) {  
return unique = animals.filter(function(item,index){  
      return animals.indexOf(item) == index;  
   });  
}  
 console.log(duplicate())  

// Convert all the strings to title caps in a string array//

let str="hello everyone good morning all";
const capitalletters=function(str){
    const string=str
    .toLowerCase()
    .split(" ")
    .map(function(word){
        return word[0]
        .toUpperCase() + word.substr(1,word.length);
      })
      .join(" ")
      return string;
}
console.log(capitalletters(str));

// Return all the palindromes in an array//

const  arr5=[1, 5, 7, 4, 15, 4, 7, 5, 1];
const palindrome4=function(arr5){
    const {length:l}=arr5;
    const mid=Math.floor(l/2);
    for(i=2; i<=mid; i++){
        if(arr5[i]!==arr5[l-i-1]){
            return false;
};
    };
    return true;
};
console.log(palindrome4(arr5));

// Return median of two sorted arrays of same size//
value2=[2,3,4,5]
value3=[6,8,9,7]
const medianof2values=function(value2,value3){
    var concat=value2.concat(value3);
    concat=concat.sort(function(a,b){
        return a-b});
        console.log(concat);
        var length=concat.length;
        if(length%2===0){
            return (concat[length/2]);
        }else{
            return (concat[length/2]+concat[length/2]-1);
        }
}
console.log(medianof2values(value2,value3));

// Rotate an array by k times//

let array3=[1,2,3,4,5,6,7,8,9,10]
let k=5;
const rotate=function(array3,k){
    let i=0;
    while(i<k){
        array3.unshift(array3.pop())
        i++;
}
return array3;
};
console.log(rotate(array3,k));





























































