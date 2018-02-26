// Zadanie dnia: sleep sort

const removeUnneccessaryArgs = (() => {
    let array = process.argv;
    array.reverse();
    array.pop();
    array.pop();
    array.reverse();

    for(let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }

    return array;
});

let arr = removeUnneccessaryArgs();

console.log(arr);

const sleepSort = ((array) => {
    for(let i of array) {
        const t = setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
});

sleepSort(arr);