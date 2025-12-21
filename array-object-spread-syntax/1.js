/*
    1. Create an variable called "views" that points at this array:
       [ [5, 10, 20], [10, 20, 30] ]

    2. Create another variable called "viewsCopy" that creates a
       copy of "views" using the spread operator

    3. Print out "views" and "viewsCopy"

    4. Add the number 40 to the end of the second array inside "viewsCopy"
       and delete the last number (20) inside the first array

    5. Add the array [100, 200] to the end of "viewsCopy"

    6. Print out "views" and "viewsCopy"

    *Explain this behaviour
*/
let views = [ [5, 10, 20], [10, 20, 30] ];
let viewsCopy = [...views];
console.log(`views:`, views);
console.log(`copys:`, viewsCopy);

viewsCopy.push(40);
console.log('-----');
console.log(`views:`, views);
console.log(`copys:`, viewsCopy);

views.pop();
console.log('-----');
console.log(`views:`, views);
console.log(`copys:`, viewsCopy);

viewsCopy.push([100,200])
console.log('-----');
console.log(`views:`, views);
console.log(`viewcopy:`, viewsCopy);
