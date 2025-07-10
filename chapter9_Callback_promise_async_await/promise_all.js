// Write a program using Promise.all inside an async/ await to await 3 promises. Compare results with the case where we await these promises one by one


const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(67);
    }, 1000)
    
})


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(67);
    }, 2000)
})


const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(67);
    }, 3000)
})


async function main3(){
    console.time("run1")
    let a1 = await p1;
    let a2 = await p2;
    let a3 = await p3;
    console.log(a1, a2, a3);
    console.timeEnd("run1")
    console.time("run2")
    let b = await Promise.all([p1, p2, p3]);
    console.log(b);
    console.timeEnd("run2");
}


main3();