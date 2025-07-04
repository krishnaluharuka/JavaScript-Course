// Change the color of first element of the navbar

const el=document.querySelector(".container-fluid").firstElementChild;
console.log("helo");
el.style.color="red";



// Change the color of first and last element of navbar

const el3=document.querySelector(".navbar-nav").lastElementChild.style.color="green";
const el1=document.querySelector(".navbar-nav").firstElementChild.style.color="green";


// change background of all a of navbar
const nav=document.getElementsByTagName("a");
// console.log(nav);


Array.from(nav).forEach(element => {
    console.log(element);
    element.style.backgroundColor="cyan";
});
