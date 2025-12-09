/*
    1. Create an array with the following strings:
        - "Mercury"
        - "Venus"
        - "Earth"
        - "Mars"

    2. Add the string "Jupiter" to the END of the array
    3. Add the string "Sun" to the START of the array
    4. Remove the last two strings from the array
    5. Remove the first two strings from the array

    *Print out the array after each of these steps ^
*/

let arr = ["Mercury", "Venus", "Earth", "Mars"];
console.log(arr);


arr.push("Jupiter");
console.log(arr);


arr.unshift("Sun");
console.log(arr);


//remove last two items
arr.splice(-2)
console.log(arr);

//remove the first two items
let start = 0;
let count = 2;
arr.splice(start, count);
console.log(arr);