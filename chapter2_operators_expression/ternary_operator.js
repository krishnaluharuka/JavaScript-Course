let prompt=require('prompt-sync')();

let age=Number.parseInt(prompt("Enter a age"));

console.log(age>18? 'Drive' : 'Cannot drive');