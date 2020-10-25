const person = {
	name: 'Leo',
	age: 29
};

const leoV2 = {
	...person
};

person.name = 'Leo Gutiérrez Ramírez';

console.log(person);
console.log(leoV2);