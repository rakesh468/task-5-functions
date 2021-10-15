//  Print odd numbers in an array//
let array=[1,2,3,4,3,2,5,6,7,8,2,1]
let odds=array.filter(n=> n%2)
console.log(odds);

//Sum of all numbers in an array//

let values=[1,2,3,4,5,6,7,8,9,10]
console.log(values.reduce((a,b)=>a+b,0))

// Remove duplicates from an array//
let creatures = ["Lion", "Rabbit", "Mouse", "Monkey", "Lion","Ape"]  
let usingFilter = () => {  
return unique = creatures.filter(function(item,index){  
      return creatures.indexOf(item) == index;  
   });  
}  
console.log(usingFilter())  

// Convert all the strings to title caps in a string array//

let str1 = 'hello world coding is very interesting';
const capsTitle = (str1) => {
   const string = str1
   .toLowerCase()
   .split(" ")
   .map(word => {
      return word[0]
      .toUpperCase() + word.substr(1, word.length);
   })
   .join(" ");
   return string;
}
console.log(capsTitle(str1));

// Return all the palindromes in an array

const nums=[1, 5, 7, 4, 15, 4, 7, 5, 1];
const palindrome1=(nums)=>{
    const {length:l}=nums
    const mid=Math.floor(l/2);
    for(i=2;i<=mid;i++){
    if(nums[i]!==nums[l-i-1]){
    return false;
};
};
 return true;
};
console.log(palindrome1(nums))




