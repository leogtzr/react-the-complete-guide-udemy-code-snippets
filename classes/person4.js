// ES7
class Human {
    gender = 'male';
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Leo';

    printMyName = () => {
        console.log(this.name);
        console.log(this.gender);
    }

}

const p1 = new Person();
p1.printMyName();

p1.printGender();
