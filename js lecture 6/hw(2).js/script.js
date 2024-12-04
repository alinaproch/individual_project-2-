// 1 задание
let timeOfDay = prompt("Введите время суток (утро, день, вечер):");
if (typeof timeOfDay === "string" && timeOfDay.trim() !== "") {
    timeOfDay = timeOfDay.trim().toLowerCase(); 
    if (timeOfDay === "утро") {
        alert("Доброе утро! Вам подойдет кофе ☕.");
    } else if (timeOfDay === "день") {
        alert("Добрый день! Попробуйте чай 🍵.");
    } else if (timeOfDay === "вечер") {
        alert("Добрый вечер! Горячий шоколад будет отличным выбором 🍫.");
    } else {
       alert("Ошибка: введите одно из значений — утро, день или вечер.");
    }
} else {
    alert("Ошибка: необходимо ввести строку, содержащую время суток.");
}
// 2 задание
let student = {};
student.name = prompt("Введите ваше имя:");
student.age = parseInt(prompt("Введите ваш возраст:"));
student.subject = prompt("Введите ваш любимый предмет:");
student.grade = prompt("Введите вашу оценку:");

console.log("Первоначальные данные:");
console.log("Имя:", student.name);
console.log("Возраст:", student.age);
console.log("Любимый предмет:", student.subject);
console.log("Оценка:", student.grade);

student.age += 5;

console.log("Обновлённые данные:");
console.log("Имя:", student.name);
console.log("Возраст через 5 лет:", student.age);
console.log("Любимый предмет:", student.subject);
console.log("Оценка:", student.grade);

// 3 задание
const movies = [
    { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
    { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
    { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
    { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
    { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];
console.log("Режиссёр второго фильма:", movies[1].director);
console.log("Жанр четвёртого фильма:",movies[3].genre);

// 4 задание
let shoppingList=["яблоки","бананы","молоко","сыр","хлеб","шоколад"];
shoppingList.unshift("вода");
console.log("После добавления нового товара в начало:", shoppingList);

shoppingList.pop();
console.log("После удаления последнего товара:", shoppingList);

shoppingList.splice(2, 1, "йогурт", "овсянка");
console.log("После замены третьего элемента на два новых:", shoppingList);

