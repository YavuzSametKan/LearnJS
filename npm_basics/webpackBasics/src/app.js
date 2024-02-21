import Teacher from "./Teacher.js"

const teacher = new Teacher('Erkan', 'Tanyıldızı', 1980, "Software Engineering Teacher", 40000, 'Data Structure')

console.log("Age: " + teacher.calculateAge())
teacher.greeting()