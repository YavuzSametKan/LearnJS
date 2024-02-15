let numbers = [100,200,300,400];
let [number1, number2, ...numbers2] = numbers;
/*
console.log("numbers array:", numbers);
console.log("number1 variable:", number1);
console.log("number2 variable:", number2);
console.log("numbers2 array:", numbers2);
*/
let person = {
    name: "Yavuz Samet",
    surname: "Kan",
    age: 20,
    salary: 31206, 
    showInfos: () => console.log("isim: " + person.name + "\n" + "soyisim: " + person.surname + "\n" + "yaş: " + person.age + "\n" + "maaş: " + person.salary + "₺\n")
}
 
/*salary:maas değişkeni yok. (olmasada olur onu göstermeye çalıştım)*/ 
let {name:isim, surname:soyad, age:yas, showInfos:bilgileriGoster} = person;
//bilgileriGoster();

//************************************************************

//* ForIn For Of */

//? For In döngüsü döngü sonucunda indexleri ve properti'leri
//? verirkenfor of döngüsü direkt değerleri verir

//? For In dögüsü objelerde gezinebilirken for of döngüsü gezinemez.

let langs = ["python", "java", "c++", "c#", "javascript", "php"];

let name = "Yavuz";

for(let prop in person){
    //console.log(prop, " - ", person[prop]);
}

for(let index in langs){
    //console.log(index, " - ", langs[index]);
}

for(let index in name){
    //console.log(index, " - ", name[index]);
}

/*for(let prop of person){ //! hata verir : "Uncaught TypeError: person is not iterable"
    //console.log(prop, " - ", person[prop]);
}*/

for(let val of langs){
    //console.log(val);
}

for(let val of name){
    //console.log(val);
}


//****************************************************************

//? Map veri yapısı, anahtar-değer çiftlerini tutmak için kullanılır.
//? Herhangi bir veri türüyle anahtarlar ve değerler kullanılabilir.

let myMap = new Map();

//? set() metoduyla anahtar-değer çiftleri eklenir.
myMap.set('anahtar1', 'değer1');
myMap.set(2, 'değer2');

//? get() metoduyla bir anahtara göre değer alınabilir.
let deger1 = myMap.get('anahtar1'); // deger1 = 'değer1'

//? has() metodu, bir anahtarın varlığını kontrol eder.
let anahtarVarMi = myMap.has('anahtar1'); // true

//? delete() metoduyla bir anahtar-değer çifti silinebilir.
myMap.delete(2);

//? clear() metodu, tüm anahtar-değer çiftlerini temizler.
myMap.clear();

//? Map nesnesinin boyutunu size özelliğiyle alabiliriz.
let mapBoyutu = myMap.size;

//* Örnek bir array
let myArray = [
    ['anahtar1', 'değer1'],
    ['anahtar2', 'değer2'],
    ['anahtar3', 'değer3']
  ];
  
//? Array'i Map'e dönüştürme
let myMap2 = new Map(myArray);

//? map'i array'e çevirme
let myArray2 = Array.from(myMap2);

//? Map'teki anahtarları ve değerleri yazdırma
    //console.log("Anahtarlar ve Değerler:");
for (let [key, value] of myMap2) {
    //console.log(`Anahtar: ${key}, Değer: ${value}`);
}

//? Sadece anahtarları yazdırma (for-of döngüsü)
//console.log("\nSadece Anahtarlar:");
for (let key of myMap2.keys()) {
    //console.log(key);
}

//? Sadece değerleri yazdırma (for-of döngüsü)
//console.log("\nSadece değerler:");
for (let value of myMap2.values()) {
    //console.log(value);
}

//? Sadece değerleri yazdırma (forEach kullanımı)
//console.log("\nSadece Değerler:");
myMap2.forEach((value) => {
    //console.log(value);
});

//? değerleri ve anahtarları yazdırma (forEach kullanımı)
//console.log("\değerler ve anahtarlar:");
myMap2.forEach((value, key) => {
    //console.log(key , ":" , value);
});

//! Sadece anahtarları yazdırma (for-in döngüsü - önerilmez)
//console.log("\nSadece Anahtarlar (for-in kullanımı - önerilmez):");
for (let key in myMap2) {
    //console.log(key);
}

//****************************************************************

//** Setler (Kümeler) */
//? Setler aynı değerleri içeremez her biri farklı olmak zorundadır
let mySet = new Set();
mySet.add("Yavuz");
mySet.add(12);
mySet.add(3.14);
mySet.add([1,2,3,4]);
//console.log(mySet);

//? Add metodu kullanmadan Set'i tek satırda constructor vasıtasıyla oluşturmak.
//? Bu aynı zamanda array'den set oluşturmak anlamına da gelir.
let mySet2 = new Set(["Yavuz",12,3.14,[1,2,3,4]]);
//console.log(mySet2);

//? Set'in size'ını (boyutu) öğrenmek.
//console.log(mySet.size);

//? Set'ten bir değeri silmek.
mySet.delete("Yavuz");
//console.log(mySet);

//? Set'te bir değer var mı yok mu öğrenmek.
//* değer tipinde olduğu için true döner
//console.log(mySet.has(3.14));
//! referans değer olduğu için false döner
//console.log(mySet.has([1,2,3,4]));

//? set'in değerlerini foreach ile ekrana yazdırma
//console.log("mySet2 değerleri (foreach):")
mySet2.forEach(val => {
    //console.log(val);
});

//? set'in değerlerini for of ile ekrana yazdırma
//console.log("mySet2 değerleri (for of):")
for(let val of mySet2){
    //console.log(val);
}

//? set'lerden array oluşturma
let setToArray = Array.from(mySet2);
//console.log(setToArray)

