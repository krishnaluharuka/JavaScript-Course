
let alp=["snake","water","gun"];


let confirming=true;
let input;
let round=3;
let win=0;

alert("You will Have 3 round");

while(round>0 &&  confirming){
let randomalp=Math.floor(Math.random()*alp.length);
randomstr=alp[randomalp];
input=prompt("Snake , Water, Gun?");
if(input == randomstr){
    alert("Draw.. This round won't be counted");
    confirming=confirm("Do you want to play again?");
}else if(input=="snake" && randomstr=="water" || input=="gun" && randomstr=="snake" || input=="water" && randomstr=="gun"){
    alert("The string was " + randomstr +" yey! you won it");
    confirming=confirm("Do you want to play again?");
    round--;
    win++;
}else{
    alert("The string was " + randomstr + ":( you lose it");
    confirming=confirm("Do you want to play again?");
    round--;
}
}
document.writeln("There are 3 rounds in total! The game ends and your score is " + win + " out of 3");
