//promise = an object that manages asynchronous operation
//"i promise to return a value"
//new promise(resolve, reject) = > {asynchronous operation}

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkingDog = true;
            if (walkingDog) {
                resolve("you walk a dog");
            } else {
                reject("you don't walk the dog");
            }
        },1500);
    })
}

function makeSlime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const makeTheSlime = true;
            if(makeTheSlime) {
                resolve("you make the slime");
            } else {
                reject("you don't make the slime");
            }
        },2500)
    })
}

function doBath() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const doTheBath = false;
            if(doTheBath) {
                resolve("you do the Bath");
            } else {
                reject("you don't do the Bath");
            }
        },500)
    })
}

walkDog().then(value => {console.log(value); return makeSlime()})
    .then(value => {console.log(value); return doBath()})
    .then(value => {console.log(value); console.log("you finished the tasks")})
    .catch((error) => {console.error(error)});

// walkDog(() => {
//     makeSlime(() => {
//         doBath(() => {
//             console.log("you have done all");
//         })
//     })
// })
