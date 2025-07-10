// create a promise which rejects after 3 seconds. Use an async/await to get its value. Use a try catch to handle its error.


const p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Error occured"))
        }, 3000)
    })
}


let a = async () => {
    try {
        let c = await p();
        console.log(c);
    }
    catch (e) {
        console.log(e);
    }

}



a();