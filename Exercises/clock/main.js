
const span=document.querySelector(".time")

setInterval(function(){
    const date=new Date();
    const h=date.getHours();
    const m=date.getMinutes();
    const s=date.getSeconds();
    // console.log(h + ":" + m + ":" +s);
    span.innerHTML = `${h} : ${m} : ${s}`;
},1000);
