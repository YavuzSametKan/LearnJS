export default class Employee{
    constructor(name,surname,yearOfBirth,sallary){
        this.name = name
        this.surname = surname
        this.yearOfBirth = yearOfBirth
        this.sallary = sallary
    }

    calculateAge(){
        const now = new Date()
        return now.getFullYear() - this.yearOfBirth
    }

    greeting(){
        console.log(`Hello, I'm ${this.name} ${this.surname}.`)
    }
}