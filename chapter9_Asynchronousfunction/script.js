// A  program to load a JavaScript file in a browser using Promises. Use .then() to display an alert when the load is complete


function loadScript(src){
    return new Promise((resolve, reject)=>{
        const script = document.createElement("script");
        script.src=src;
        document.body.appendChild(script);
        if(script.onload){
            resolve("The script is created");
        }else{
            reject("error");
        }
    });   
}


loadScript("script.js").then(alert);