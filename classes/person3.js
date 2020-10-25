class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender = () => {
        console.log(this.gender);
    }

}
class Person extends Human {
    constructor() {
        super();
        this.name = 'Leo';
    }

    printMyName = () => {
        console.log(this.name);
        console.log(this.gender);
    }

}

const p1 = new Person();
p1.printMyName();

p1.printGender();
