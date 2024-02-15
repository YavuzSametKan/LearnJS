let arr = [98,21,32,76,43,65,10,87,54]

console.log(arr.indexOf(10))

let arrSort
arrSort = arr.sort(function(x,y){return x-y}) // küçükten büyüğe sıralama
console.log(arrSort)
arrSort = arr.sort(function(x,y){return y-x}) // büyükten küçüğe sıralama
console.log(arrSort)

arr.push("push")
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift("unshift")
console.log(arr)

arr.shift()
console.log(arr)

arr.reverse()
console.log(arr)

arr = [98,21,32,76,43,65,10,87,54]

let splicedArr = arr.splice(0,7) // index range -> [0,7)
console.log(splicedArr);
console.log(arr)
