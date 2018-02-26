// 2. Odpowiednia kolejność


    const firstFunc = setTimeout(() => {
        console.log('Node.js');
    }, 4000);

    const secondFunc = setTimeout(() => {
        console.log('się');
    }, 1000);

    const thirdFunc = (() => { console.log('Witam'); }) ();

    const fourthFunc = setTimeout(() => {
        console.log('i korzystam');
    }, 6000);

    const fifthFunc = setTimeout(() => {
        console.log('w konsoli');
    }, 5000);

    const sixthFunc = setTimeout(() => {
        console.log('z funkcji czasu!');
    }, 7000);

    const seventhFunc = setTimeout(() => {
        console.log('z');
    }, 2000);

    const eighthFunc = setTimeout(() => {
        console.log('programem');
    }, 3000);


    /*
    Witam
    się
    z
    programem
    Node.js
    w konsoli
    i korzystam
    z funkcji czasu!
    */