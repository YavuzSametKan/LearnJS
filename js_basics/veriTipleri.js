let str = "Merhaba Dünya" //typeof String
let char = 'a' //typeof String
let int = 15 //typeof Number
let float = 3.14159 //typeof Number
let bool = true //typeof Boolean
let arr = ["Merhaba Dünya", 'a', 15, 3.14159, true] //typeof Object(Referance data type)
let obj = {
    str : "Merhaba Dünya",
    char : 'a',
    int : 15,
    float : 3.14159,
    bool : true,
    arr : ["Merhaba Dünya", 'a', 15, 3.14159, true]
 } //typeof Object(Referance data type)
let empty //typeof Undefined
let hello = function(name){
    return "Hello " + name
} // typeof Function
console.log(arr[0])
console.log(obj["arr"])
console.log(typeof empty)
console.log(hello("Yavuz"))