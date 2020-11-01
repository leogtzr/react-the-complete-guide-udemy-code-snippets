class Person {
    constructor() {
        this.name = 'Leo';
    }

    printMyName = () => {
        console.log(this.name);
    }

}

const p1 = new Person();
p1.printMyName();
