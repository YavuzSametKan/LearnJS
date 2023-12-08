//* ES6 Syntactic Sugar Class writing
class Employee{
    constructor(name,surname,yearOfBirth,sallary){
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.sallary = sallary;
    }

    calculateAge(){
        return 2023 - this.yearOfBirth;
    }

    greeting(){
        return `Hello, I'm ${this.name} ${this.surname}.`
    }
}

//* The Teacher class (subclass) is Inherit the Employe class (superclass)
class Teacher extends Employee{
    constructor(name,surname, yearOfBirth, sallary, subject){
        //* Super method is calling the Superclass methods.
        super(name,surname,yearOfBirth,sallary);
        this.subject = subject;
    }

    //* The greeting method is overriding here
    greeting(){
        return super.greeting() + ` I'm a ${this.subject} teacher.`; 
    }
}

let teacher1 = new Teacher("Erkan","Tanyıldızı",1969,45000,"Data Structor and Algorithms");
//console.log(teacher1.greeting());

//*  Static methods
//? Static methods aren't usable with object becouse static methods aren't writing in prototype, writing in general class. 

class Math{
    static cube(x){
        return x*x*x;
    }
}

//console.log(Math.cube(2));

let mathObject = new Math();
//console.log(mathObject.cube(2)); //! This speling is going to give an error.



