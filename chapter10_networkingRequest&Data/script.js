// use a free API from the internet and feed your app with live data.

//api with a object
let response = fetch("https://official-joke-api.appspot.com/random_joke");

    response.then(value => { return value.json() })
    .then(data => console.log(`${data.setup}  ${data.punchline}`))

//api with multiple objects
let response1 = fetch("https://official-joke-api.appspot.com/random_ten");

response1.then(value => { return value.json()})
.then(data => {
    for (item in data) {
        console.log(`${data[item].setup}  ${data[item].punchline}`)
    }})


// create a note saving app which stores your note to localStorage

let note = prompt("Enter your note")
localStorage.setItem("note", `${note}`);

// get the note from the localStorage

let displayNote = localStorage.getItem("note");
alert(displayNote);

//delete the note 
localStorage.removeItem("note");
alert("Note deleted successfully");


