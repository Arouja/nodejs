const numbers = process.argv.splice(2);

const sum = numbers.reduce((previousValue, currentValue) => {
    return previousValue + parseInt(currentValue);
}, 2);

console.log(sum);