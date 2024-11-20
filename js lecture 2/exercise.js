// 1 - задание
const isLoggedIn=true;
const strIsLoggenIn="" + isLoggedIn;
console.log(strIsLoggenIn,typeof strIsLoggenIn);

// 2 - задание
let itemsInCart=5;
itemsInCart=!!itemsInCart;
console.log(itemsInCart,typeof itemsInCart);


// 3 - задание
const message="Welcome to Javascript World!";
const trimmedMessage=message.trim();
const upperCaseMessage= trimmedMessage.toUpperCase();
const messageHasJavaScript=trimmedMessage.includes("JavaScript");
console.log(message);
console.log(trimmedMessage);
console.log(upperCaseMessage);
console.log(messageHasJavaScript);

// 4 задание
const score="100";
const numericScore=+score+20;
const stringScore=numericScore.toString();
console.log(numericScore);
console.log(typeof stringScore);





