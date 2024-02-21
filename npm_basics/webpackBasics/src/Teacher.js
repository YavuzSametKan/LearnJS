import Employee from "./Employee.js"

export default class Teacher extends Employee{
    constructor(name,surname, yearOfBirth, department, sallary, subject){
        super(name,surname,yearOfBirth,sallary);
        this.subject = subject;
    }

    greeting(){
        console.log(`Hello, I'm ${this.name} ${this.surname}. I'm a ${this.subject} teacher.`) 
    }
}