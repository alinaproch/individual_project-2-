let firstName = "Алина";
let lastName = "Проч";
let age = "20";
console.log(`Меня зовут ${firstName} ${lastName} и мне ${age} лет`);

let city = "Uralsk";
console.log("Я родом из города" + city);

let password = "password";
let hasAccess = password !== "";
console.log(password, "Password");
console.log(hasAccess, "Has Access");

let isMember = false;
let isMemberString = isMember.toString();
console.log(typeof isMemberString);

let cartItems = 0;

let isCartEmpty = Boolean(cartItems);
console.log(isCartEmpty);
if (isCartEmpty) {
  console.log("Корзина не пустая.");
} else {
  console.log("Корзина пустая.");
}
// Поскольку значение переменной cartItems равно 0, при преобразовании в логическое оно становится false. Это указывает на то, что корзина пустая. 
// В условии if проверяется переменная isCartEmpty. Так как её значение false, выполняется блок else, и в консоль выводится сообщение: "Корзина пустая".


let greetingMessage = "      Приветствуем вас в мире программирования!        ";
let trimmedMessage = greetingMessage.trim();
console.log(trimmedMessage);
let upperCaseMessage = trimmedMessage.toUpperCase();
console.log(upperCaseMessage); 
let containsWord = trimmedMessage.includes("программирования");
console.log(containsWord);
