

const numbers = [1,2,3,4,5];
function squares(element) {
    return Math.pow(element, 2);
}
const squaresArray = numbers.map(squares);
console.log(squaresArray);