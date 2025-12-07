
console.log("Program started");

const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve("Resolved after 3s");
        console.log("Program complete");
    }, 3000)
})

console.log(myPromise);

console.log("Program in progress");



