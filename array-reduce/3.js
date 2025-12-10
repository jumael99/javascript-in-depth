/*
    1. Create the following array called "items":
        ["light", "banana", "phone", "book", "mouse"]

    2. Create an new array called "caps" that:
        - maps over "items" and capitalizes each item

    3. Create a const called "concat" that:
        - uses reduce to concatenate all the strings in "caps"
          using a space to separate each item

    4. Print out "items", "caps" and "concat"

    BONUS: Can you do steps 1-3 in one line?
*/

// let items = ["light", "banana", "phone", "book", "mouse"];
// let caps = items.map((el) => {
//     return el.toUpperCase();
// })
// const concat = caps.reduce((reduce, acc) => {
//     return reduce + acc;
// })
const concat = ["light", "banana", "phone", "book", "mouse"].map((el) => {
    return el.toUpperCase()
}).reduce((res, acc) => {
    return res + acc;
})
// console.log(items);
// console.log(caps);
console.log(concat);