function sortNums(...nums) {
    return nums.sort();
}

const sortNums2 = (...nums) => {
    return nums.sort();
}

const filterOdds = (...nums) => {
    return nums.filter(e => e % 2);
}

console.log(sortNums(4, 2, 6, 8, 3));
console.log(sortNums2(4, 2, 6, 8, 3));
console.log(filterOdds(4, 2, 5, 7, 2, 3));
