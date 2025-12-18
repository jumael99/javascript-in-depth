/*
    1. Create an object called "houseForSale" with the following properties:
        - area -> 940
        - value -> 320000
        - streetName -> "Fifth Street"
        - built -> "2012"
        - owner -> {name: "Blake", age: 29}
        - offers -> [290000, 295000, 315000, 312000]

    2. Print out "houseForSale" to the terminal

    3. Delete the property with the key "built"

    4. Change the age of the owner to be 30 inside "houseForSale"

    5. Print out the maximum offerPrice (use reduce)

    6. Add a new property: "sale price" -> 312000

    7. Print out "houseForSale" to the terminal

    *This is a challenging exercise - take it slow and step by step
*/

let houseForSale = {
    area: 940,
    value:320000,
    streetname: "Fifth Street",
    built: "2012",
    owner: {name: "Blake", age: 29},
    offers: [290000, 295000, 315000, 312000]
}

console.log(`House for sell:${JSON.stringify(houseForSale)}`);

delete houseForSale.built;
houseForSale.owner.age = 30;
const maxOfferPrice = houseForSale.offers.reduce((res,acc) => {
    return Math.max(res,acc);
});
console.log(`max offer price:${maxOfferPrice}`);
houseForSale["Sale Price"] = 312000;
console.log(`House for sell object: ${JSON.stringify(houseForSale)}`);
