/*
    1. Create a function called "createCounter" that has
       no parameters
    2. Inside "createCounter" create:
       - a variable called "counter" that starts at 0
       - a function called "incrementCounter" that increments
         the "counter" variable and then logs it out.
    3. Return "incrementCounter" from the "createCounter" function

    4. Test createCounter using different numbers like so:
       const counter = createCounter();
       counter(); // 1
       counter(); // 2
       counter(); // 3
       counter(); // 4

    * Why is this considered "closure"?
       Answer: Because we've declared counter twice but still it's working. 
       Because first counter was inside the createcounter function. Second 
       counter has no connection with the first counter.  WRONG ANSWER

       Answer: Because counter varible lives inside incrementcounter 
       function. Usually variables dies with the end of its function but
       it this case counter variable didn't die and it is saved int the 
       memory with the incrementCounter. 
*/


/*
A closure is created when an inner function 'remembers' variables from its
outer function. 
*/

const createCounter = () => {

    let counter = 0;
    const incrementCounter = () => {

        counter++;
        console.log(counter);
    }

    return incrementCounter;
}

const counter = createCounter();
counter();
counter();
counter();
counter();

/*
We can only see things in our own scope AND any scope above us. 
'Closing over' the state of a function.
*/

