function sortNums(...nums) {
    return nums.sort();
}

const sortNums2 = (...nums) => {
    return nums.sort();
}

console.log(sortNums(4, 2, 6, 8, 3));
console.log(sortNums2(4, 2, 6, 8, 3));
