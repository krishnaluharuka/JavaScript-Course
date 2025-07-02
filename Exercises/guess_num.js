let num=Math.floor(Math.random()*100);
const prompt=require('prompt-sync')();
let guess=0;
let input;
console.log(100 + " is your score");

do{
    input=Number.parseInt(prompt("Enter a number"));

    if(input < num){
        guess++;
        score=100-guess;
        console.log("You guessed lesser number than the original. Your score is " + score);
    }else if(input > num){
        guess++;
        score=100-guess;
        console.log("You guessed greater number than the original.);
    }
    else{
        score=100-guess;
        console.log("Congrats! You guessed the right number. Your score is" + score);
    }
}while(input != num);
