// 1. Rozgrzewka!

const myName = 'Kamil Swierczek';
const greetings = '\twita sie z Node.js';

const firstTimeout = (name, hello) => {
    console.log(name);
    setTimeout( () => {
        console.log(hello);
    }, 5000);
};

firstTimeout(myName, greetings);