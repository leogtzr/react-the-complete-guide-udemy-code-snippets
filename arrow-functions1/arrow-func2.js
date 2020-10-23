const printMyName1 = (name) => {
    console.log(name);
}

const printMyName2 = (name) => {
    console.log(name);
}

const multiply = number => {
    return number * 2;
}


const multiply2= number => number * 2;

printMyName2('Leonardo');

console.log(multiply(2));

for (let n = 1; n < 100; n++) {
    // console.log(multiply(n));
    console.log(multiply2(n));
}
