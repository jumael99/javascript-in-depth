const makeTimeout = (ms) => {
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("All done!");
        }, ms);
    });

    return timeout;
};

console.log("Program starting..."); // 1

const fetchData = async () => {
    console.log("Fetching first set of data...");
    const result1 = makeTimeout(2000);
    console.log("Fetching second set of data...", result1);
    const result2 = makeTimeout(2000);
    console.log("Done fetching data!", result2);
    const finalRes = await Promise.all([result1, result2]);
    console.log(finalRes);
};

fetchData();

console.log("Program complete..."); // 2


/*

With Await

Program starting...
Fetching first set of data...
Program complete...
Fetching second set of data... All done!
Done fetching data! All done!

*/

/*

Without Await

Program starting...
Fetching first set of data...
Fetching second set of data... Promise { <pending> }
Done fetching data! Promise { <pending> }
Program complete...

*/

