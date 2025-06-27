let prompt=require('prompt-sync')();

let num=Number.parseInt(prompt("Enter a number"));

if(num%2==0 && num%3==0){
    console.log("Your number is divisible by 2 and 3");
}else{
    console.log("Your number is not divisible by 2 and 3");
}
