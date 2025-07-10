
// A program to load a Java Script file in a browser using promises. Use .then() to display an alert when load is complete.

function loadScript(src){
        return new Promise(function(resolve, reject){
            const el= document.createElement("script");
            el.src = src;
            document.body.appendChild(el);
            el.onload = () =>{
                resolve("the JavaScript file is loaded");
            }
            el.onerror = (e) => {
                reject("error occured while Loading");
            }
        });
    }


    // using .then
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js").then(alert).catch(alert);



    // using async/await
async function main1(){
    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
    alert("Result: " + a);
}

main1();
    
    