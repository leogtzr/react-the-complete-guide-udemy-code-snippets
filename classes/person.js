// class Person extends Master
class Person {
    name = 'Max'
    call = () => {
        console.log(this.name);
    }
}

p1 = new Person();
console.log(p1.name);
p1.call();
