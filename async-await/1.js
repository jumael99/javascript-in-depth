/*
    1. Create a function called "fetchUser" that returns
       a Promise that resolves with the value :
       { data: {user: "Monkey", admin: true} } after 3 seconds
    2. Create a function called "login" that takes an Object
       as an argument. If the object has a property called
       "admin" with a value of true, then log out
       "Successfully logged in!", otherwise log out
       "Failed to log in, please try again."

    3. Print out "Program starting..."

    4. Create an async function that uses await to wait for
       the data to comes back from "fetchUser".

    5. Pass the user that comes back from "fetchUser" to the
       "login" function you created above

    6. Call the async function you created
    7. Log out "Program complete!"
*/

function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: {user: "Monkey", admin: true} });
        }, 3000)
    });
}

// ... fetchUser function remains the same ...

function login(user) {
    // Improvement: This function now receives just the user object
    if(user.admin) {
        console.log("Successfully logged in!");
    } else {
        console.log("Failed to log in, please try again.");
    }
}

console.log("Program starting...");

async function main() { // Improvement: Better name
    try {
        const response = await fetchUser();
        // Improvement: Pass only the necessary data, not the whole response
        login(response.data);
    } catch (e) {
        console.log(e);
    }
}

main();

console.log("Program complete!");

// function login(obj) {
//     if(obj.data.admin === true) {
//         console.log("Successfully logged in!");
//     } else console.log("Failed to log in, please try again.");
// }
//
// console.log("Program starting...");
//
// async function asyn() {
//     try {
//         const userFetch = await fetchUser();
//         login(userFetch);
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// asyn();
//
// console.log("Program complete!");