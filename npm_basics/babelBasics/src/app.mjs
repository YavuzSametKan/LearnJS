import Teacher from "./Teacher.mjs"

const teacher = new Teacher('Erkan', 'Tanyıldızı', 1980, 40000, 'Data Structure')

console.log("Age: " + teacher.calculateAge())
teacher.greeting()