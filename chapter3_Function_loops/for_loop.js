let marks={
    "harry": 90,
    "shubham": 75,
}

for(let i=0; i < Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

// for in loop
for (i in marks){
    console.log("The marks of " + i + " are " + marks[i]);
}