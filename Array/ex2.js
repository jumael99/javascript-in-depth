/*
    Create a variable called "greeting" and initialize it to:
        "Hello, nice to meet you!"

    Use a loop to loop through this String (just like you would an array)
        - On each loop iteration, print out what is at that index

    WHY does this happen?
    WHAT is a String, really?
*/


let greeting = "Hello, nice to meet you!";

// for(const element of greeting) {
//     console.log(greeting[element]);
// }

for(let i = 0;i < greeting.length;i++) {
    console.log(greeting[i]);
}