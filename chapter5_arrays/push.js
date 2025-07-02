let arr=[5,6,4,3,2];
let prompt=require('prompt-sync')();
let input=prompt("Enter a number");
let number=Number.parseInt(input);
arr.push(number);
console.log(arr);

