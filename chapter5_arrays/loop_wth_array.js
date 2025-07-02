let arr2=[];
let prompt=require('prompt-sync')();
let number;
do{
    let input=prompt("Enter a number");
    // console.log(input);
    number=Number.parseInt(input);
    // console.log(number)
    arr2.push(number);
    // console.log(arr2);
}while(number != 0 );

console.log(arr2);