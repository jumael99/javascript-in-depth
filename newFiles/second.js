// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5


let n = 10;
let z;
for(let x = 1;x <= n;x++) {
    z = x;
    for (let y = 1;y <= x;y++) {
        process.stdout.write(String(z));
        process.stdout.write(String(' '));
    }
    process.stdout.write(String('\n'));
}