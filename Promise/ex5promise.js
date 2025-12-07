

const myPromise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
       resolve(10)
    }, 3000)
})

const myPromise2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(20)
    }, 5000)
})

let sum = 0;

Promise.all([myPromise1, myPromise2])
    .then((val) => {
        // console.log(val);
        for(let i = 0; i < val.length;i++) {
            sum += val[i];
        }
        console.log(sum);

    })
