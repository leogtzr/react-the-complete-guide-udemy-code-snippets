const person = {
    name: 'Leo',
    age: 29
};

console.log(person);

const leo = {
    ...person,
    gender: 'male'
};

console.log(leo);
console.log(leo.gender);
