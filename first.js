// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let n = 10;
for(let i = 1;i <= n;i++) {
    for(let j = 1;j <= i;j++) {
        process.stdout.write(String(j));
    }
    process.stdout.write('\n');
}