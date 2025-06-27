// use logical operator to find whether the age of a person lies between 10 and 20

const prompt=require('prompt-sync')();

let age = prompt("enter your age");
if(age > 10 && age < 20){
    console.log("Yes, your age lies between 10 and 20")
}else{
    console.log("No");
}