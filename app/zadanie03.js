// 3. Dodawanie

const sumTwoNums = ((num1, num2) => {
    return Number(num1) + Number(num2);
});

const sumNums = ((...nums) => {
    let sum = 0;
    for(let i of nums) {
        sum += Number(i);
    }
    return sum;
});

const sumFromArgv = (() => {
    let sum = 0;
    let args = process.argv;
    for(let i = 2; i < args.length; i++){
        sum += Number(args[i]);
    }
    console.log(sum);
}) ();

