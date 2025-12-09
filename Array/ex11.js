/*
    1. Create a variable called "multiple" and initialize it to 5
    2. Create an array with the numbers 10-15 (inclusive)
    3. Loop through the array and on each iteration:
        - Multiply the number by the multiple and print out the result
        - As you're printing, use this format (example):
            10 x 5 = 50
            11 x 5 = 55
            ...
            15 x 5 = 75

    BONUS: Try to see if you can make it so that all you need to change
    is the "multiple" variable and the program still works correctly.
*/

let multiple = 5;
let arr = [10,11,12,13,14,15];

for(let it = 0;it < arr.length;it++) {
    let res = 1;
    res = arr[it] * multiple;
    console.log(`${arr[it]} x ${multiple} = ${res}`);
}