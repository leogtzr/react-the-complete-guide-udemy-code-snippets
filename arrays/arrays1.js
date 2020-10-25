const numbers = [1, 2, 3];
const doubleNumArray = numbers.map(x => x * 2);

console.log(doubleNumArray);

var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

const ids = officers.map(officer => officer.id);
console.log(ids);