const bulb=document.querySelector(".bulb");
const h2 = document.querySelector("h2");
const text= [`Hello World!`,
    `खाली पेट मेरे दिमाग 🧠<br> की बत्ती 💡 नहीं जलती`, 
    `Udi Baba 😹`,
    `Hello भाई, चाय ☕ पी लो!`,
     `Bigg Boss 😎... <br> मुझे हर्ट हो रहा है Bigg Boss...😩`,
     `Kon Hein Yeh Log <br> Kaha Se Aate Hein 😎`,
     `Yo chai over huncha hai! 🧓`,
     `Ma ta jhandai birseko 🙈`,
     `Tyo ta mero style ho! 😎`,
     `Timro attitude ta NASA 🌌 <br>le pani study garna chahanchha!!`,
     `Timi ta Google laai <br> pani confuse face 😵 garne level <br> ko question ❓ hau!`,
     `Timro kura tah <br> interesting 🤩 chha yaar`
    ];
let random;

setInterval(function(){
    bulb.classList.toggle("bi-lightbulb");
    if(bulb.classList.contains("bi-lightbulb")){
        document.body.style.backgroundColor="black";
        h2.innerHTML = '';
    }

    bulb.classList.toggle("bi-lightbulb-fill");
    if(bulb.classList.contains("bi-lightbulb-fill")){
        random= Math.floor(Math.random() * text.length);
        document.body.style.backgroundColor="rgb(196, 190, 190)";
        h2.innerHTML = text[random];
    }
},1000);