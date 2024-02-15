let name = "Yavuz Samet"
let surname = "Kan"
let phone = "+90-555-444-3333"
let salary = 20000
let department = "Software Developer"

// Normal Yazım
console.log("Name: " + name + "\n" + "Surname: " + surname + "\n" + "Phone: " + phone + "\n" + "Salary: " + salary + "\n" + "Department: " + department) 
// Template Literal Yazım
console.log(`Name: ${name}\nSurname: ${surname}\nPhone: ${phone}\nSalary: ${salary}\nDepartment: ${department}`) 
// ->``<- Bu tırnağı açabilmek için altgr + vigül kombinasyonuna bas. 

console.log(`Name: ${name},\nSurname: ${surname},\nPhone: ${phone},\nSalary: ${salary},\nDepartment: ${department}`);