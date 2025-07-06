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
},1000);