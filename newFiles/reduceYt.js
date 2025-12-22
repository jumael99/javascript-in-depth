const grades = [75, 50, 90, 80, 65, 95];
const maxVal = grades.reduce((acc, next) => {
    return Math.max(acc, next);
})

const minVal = grades.reduce((acc, next) => {
    return Math.min(acc, next);
})

console.log(maxVal);
console.log(minVal);