const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

const printLongWords = words.filter(element => {
    return element.length >= 6
});
const printShortWords = words.filter(element => {
    return element.length < 6;
});

console.log(printLongWords);
console.log(printShortWords);
