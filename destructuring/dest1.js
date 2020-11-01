// Destructuring with arrays:
[a, b] = ['Leo', 'Brenda'];
console.log(a);
console.log(b);

[c, d] = [20, 30];
console.log(c);
console.log(d);

// Using default values:
const { name, gender = 'male' } = {name: 'Leo', age: 29};

console.log(name);
console.log(gender);
