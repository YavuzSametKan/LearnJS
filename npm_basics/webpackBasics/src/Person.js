export default class Person{
    constructor(name,surname,yearOfBirth){
        this.name = name
        this.surname = surname
        this.yearOfBirth = yearOfBirth
    }

    calculateAge(){
        const now = new Date()
        return now.getFullYear() - this.yearOfBirth
    }

    greeting(){
        console.log(`Hello, I'm ${this.name} ${this.surname}.`)
    }
}