let a = ["Initiallizing hack tool...", "Connecting to facebook...", "Connecting to server...", "Connection failed , Retrying...", "Connecting to server 2...", "Connected Successfully...", "Username : krrish...", "Trying brute force...", "200k passwords tried...", "Match not found...", "Another 200k passwords tried...", "Match not found...", "Oh oh Match found...", "Accessing account...", "Hack Successful!!!"];


const sleep = async (seconds) =>
    {
        return new Promise((resolve, reject) =>{
            setTimeout(() => resolve(true),seconds *1000)
        })
    } 
const showHack = async (message) => {
    await sleep(2);
    // console.log(message);
    text1.innerHTML = message + "<br>";
}

(async () => {
    for(let i =0; i<a.length; i++){
        await showHack(a[i]);
    }
})()