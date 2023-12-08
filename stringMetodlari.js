let str = "Hello World"
let str2 = "Python,Java,C++,C+,C#,Javascript,PHP,Ruby,COBOL,GO,Dart,FORTRAN"
let str3 = "         test         "
let file = "examples.project.js"

console.log(str.charAt(2), str[2])

console.log(str.indexOf("l"))
console.log(str.lastIndexOf("l"))

console.log(str.toLowerCase())
console.log(str.toUpperCase())

console.log(str3.trim())
console.log(str3.trimEnd())
console.log(str3.trimStart())

console.log(str.replace(" ","_"), str.replace("World","Jupiter"))

console.log(str2.split(","))

console.log(str2.includes("Java"), str2.includes("Swift"))

console.log(file.substring(0, file.lastIndexOf("."))) // file Name
console.log(file.substring(file.lastIndexOf(".")+1, file.length)) // file Extension