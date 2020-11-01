const xs = [10, 20, 30, 40, 50];

const [a, b, ...rest] = xs;

console.log(a);
console.log(b);
console.log(rest);

// With objects:
// The name on both sides need to match.
// Without the "const" modifier we need the ().
({v1, v2} = {v1: 1, v2: 2});
console.log(v1);
console.log(v2);

const ys = [2, 4, 6];
// Ignoring a value (the one in the middle)
const [y1, _, y2] = ys;

console.log(y1);
console.log(y2);

// Default values:
[p1=3, p2=4] = [45, 67];
console.log(p1);
console.log(p2);