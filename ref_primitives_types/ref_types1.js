const person = {
	name: 'Leo',
	age: 29
};

const p2 = person;

console.log(person.name);
console.log(person.age);

person.name = 'Leonardo Gutiérrez Ramirez';
console.log(person);

p2.name = 'Leonidas';
// The reference is affected:
console.log(person);

// To create copies:

const leoV2 = {
	...person
};

leoV2.age = 30;

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(person);
console.log(leoV2);