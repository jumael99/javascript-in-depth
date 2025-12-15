/*
    1. Create a function called "fetchFast" that returns
       a Promise that resolves with the String "Fast Done!"
       after 2 seconds
    2. Create a function called "fetchSlow" that returns
       a Promise that resolves with the String "Slow Done"
       after 6 seconds
    3. Print out "Program starting..."

    4. Create an async function that uses await to wait for
       the data to comes back from "fetchFast" then log out
       the data. Then use await to wait for the data to come
       back from "fetchSlow" and log it out right after.

    5. Call the async function you created
    6. Log out "Program complete!"

    7. How long does this take and why?
    8. How could you speed it up?
*/

function fetchFast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fast Done");
        },2000)
    })
}

function fetchSlow() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Slow Done");
        },3000)
    })
}

console.log("Program starting...");

async function main() {
    const fastResponse = await fetchFast();
    console.log(fastResponse);
    const slowResponse = await fetchSlow();
    console.log(slowResponse);
};

async function mainFast() {
    const fastResponse = fetchFast();
    const slowResponse = fetchSlow();
    const [fastData, slowData] = await Promise.all([fastResponse, slowResponse]);
    console.log(fastData, slowData);
};

main();

console.log("Program complete!");
