import Person from './Person.js'

export default class Employee extends Person {
    constructor(name,surname,yearOfBirth,department,sallary){
        super(name,surname,yearOfBirth)
        this.department = department
        this.sallary = sallary
    }

    greeting(){
        console.log(`Hello, I'm ${this.name} ${this.surname} and my department is ${this.department}.`)
    }
}