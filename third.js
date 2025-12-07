// 1
// 2 3
// 4 5 6
// 7 8 9 10


let n = 5;

let z;

for(let x = 1;x <= n;x++) {
    z = x;
    for (let y = 1;y <= x;y++) {
        process.stdout.write(String(x));
        process.stdout.write(String(' '));
    }
    process.stdout.write(String('\n'));
}