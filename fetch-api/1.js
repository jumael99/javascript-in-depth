/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)

    2. Make a request to:
       https://jsonplaceholder.typicode.com/posts/1
       and print out the resulting JSON using Fetch

    BONUS: How does this differ from text content and what might
           fetch be doing with the JSON response for us?
*/

import fetch from 'node-fetch'

const fetchNow = async() => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    return response.json();
}

fetchNow().then((val) => {
    return val;
}).then((val) => {
    console.log(val.body);
});

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => {
//     return response.text();
// })
// .then((html) => {
//     console.log(html);
// })