// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    resultOne = (resultOne || 0) + numbers[i];
  }
}
console.log("1. Jumlah angka genap dalam array numbers: ", resultOne);

// ------------------------------------------------------------ //

const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo

for (let i = 0; i < numbersTwo.length; i++) {
  if (numbersTwo[i] % 2 !== 0) {
    resultTwo = (resultTwo || 0) + numbersTwo[i];
  }
}

console.log("2. Jumlah angka genap dalam array numbers: ", resultTwo)

// ------------------------------------------------------------ //

// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree

resultThree = students.map((student) => {
  return student.toUpperCase();
});

console.log("3. Uppercase value array: ", resultThree);

// ------------------------------------------------------------ //

// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];

let peopleGet = [];

for (let i = 0; i < people.length; i++) {
  if (people[i].age > 18 && people[i].name.length > 5) {
    peopleGet.push(people[i].name);
  }
}

console.log("4. People name length >5 && age >18 : ", peopleGet);

// ------------------------------------------------------------ //

// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];

let totalPrice = 0;
for (let i = 0; i < items.length; i++) {
  totalPrice += items[i].price;
}
console.log("5. Total harga: ", totalPrice);
  
// ------------------------------------------------------------ //

//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbersThree = [];
for (let i = 0; i < numbersThree.length; i++) {
    if (!uniqueNumbersThree.includes(numbersThree[i])) {
        uniqueNumbersThree.push(numbersThree[i]);
    }
}
console.log("6. Unique numbers of numbersThree: ", uniqueNumbersThree);

// ------------------------------------------------------------ //

// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];

let highestPrice = products[0];
for (let i = 0; i < products.length; i++) {
    if (products[i].price > highestPrice.price) {
        highestPrice = products[i];
    }
}

console.log("7. Produk dengan harga tertinggi: ", highestPrice.name);

// ------------------------------------------------------------ //

// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];

let sentence = words.join(" ");
console.log("8. Kalimat dari array words: ", sentence);

// ------------------------------------------------------------ //

// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];

let aNames = [];
for (let i = 0; i < names.length && aNames.length < 3; i++) {
    if (names[i].includes('a') || names[i].includes('A')) {
        aNames.push(names[i]);
    }
}
console.log("9. Tiga nama dengan huruf 'a': ", aNames);

// ------------------------------------------------------------ //

// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter

let totalChar = 0;
for (let i = 0; i < namesTwo.length; i++) {
    totalChar += namesTwo[i].length;
}
console.log("10. Total karakter dari namesTwo: ", totalChar);

// ------------------------------------------------------------ //

// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];

let people21 = [];
for (let i = 0; i < peopleTwo.length; i++) {
    if (peopleTwo[i].age > 21) {
        people21.push(`${peopleTwo[i].name} (${peopleTwo[i].age})`);
    }
}
console.log("11. Orang dengan usia > 21: ", people21);



