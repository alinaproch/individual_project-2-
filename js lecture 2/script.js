// const year=1995;
// const newYear="Year" + year;
// console.log(newYear);
// console.log(typeof newYear);

 
let age="35 years old";
age=+age;
// console.log(age);
// console.log(typeof age);


let str="JS";
str=!!str;
console.log(str,typeof str);


const fileName = "data.csv";
const fileSize = 2048;
const message = `Файл ${fileName} успешно загружен. 
Размер файла ${fileSize} КВ.`;
console.log(message); 

// String
// Явное пр. - String(), num.toString()
// Неявное пр. - "" + num

// Number
// Явное пр. - Number()
// Неявное пр. - +str

// Boolean
// Явное пр. - Boolean()
// Неявное пр. - !!variable
// Когда false - '', 0
// Когда true - все остальное