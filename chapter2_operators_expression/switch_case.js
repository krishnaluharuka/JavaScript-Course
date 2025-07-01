let prompt = require('prompt-sync')();

let age=Number.parseInt(prompt("Enter your age"));
switch (age){
    case 11:
        console.log("Your age is 11");
        break;
    case 12:
        console.log("Your age is 12");
        break;
    case 13:
        console.log("Your age is 13");
        break;
    default:
        console.log("not special");
}