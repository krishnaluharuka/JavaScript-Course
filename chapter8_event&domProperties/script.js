google.onclick = function(){
    g.setAttribute("href","https://www.google.com/");
}

fb.onclick = function(){
    f.setAttribute("href","https://www.facebook.com/");
}

twitter.onclick = function(){
    window.location = "https://www.twitter.com/";
};


// fetch the body content every 5 seconds
setInterval(function(){
    console.log(document.body.textContent);
},5000);



// bulb glow effect
const bulb=document.querySelector(".bulb");
setInterval(function(){
    bulb.classList.toggle("bi-lightbulb");
    if(bulb.classList.contains("bi-lightbulb")){
        document.body.style.backgroundColor="black";
    }
    
    bulb.classList.toggle("bi-lightbulb-fill");
    if(bulb.classList.contains("bi-lightbulb-fill")){
         document.body.style.backgroundColor="white";
    }

}, 5000);