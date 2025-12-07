const names = ["Rahim", "Karim", "jigsaw"];
const namesUpper = names.map(upperCase);
const namesLower = names.map(lowerCase);

console.log(namesUpper);
console.log(namesLower);

function upperCase(element) {
    return element.toUpperCase();
}

function lowerCase(element) {
    return element.toLowerCase();
}