
let runAgain = true;

const canDrive = (age)=>{
    return age>=18? true : false;
}


while(runAgain){
let age=Number.parseInt(prompt("Enter your age"));
if(age<0){
    console.error("Age can't be negative");
    break;
}
else if(canDrive(age)){
    alert("You can drive");
}else{
    alert("You can't drive");
}
runAgain = confirm("do you want to see the prompt again?");
}

