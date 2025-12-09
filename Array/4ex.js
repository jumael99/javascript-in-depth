/*
    Create a variable called "total" that starts at 0

    Create an array called "grades" with the following values:
        - 55
        - 63
        - 82
        - 98
        - 91
        - 43

    Figure out how to print out the AVERAGE grade
    (This is the sum of all grades divided by the number of grades)
*/


let total = 0;

let grades = [55, 63, 82, 98, 91, 43];

let sum = 0;
let count = 0;

for(const element of grades) {
    sum += element;
    count++;
}

console.log(sum/count);