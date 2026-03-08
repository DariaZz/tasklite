/*
let title = "";

if (title === "") {
  console.log("Название задачи не указано");
} else {
  console.log("Задача:", title);
}

let tasks = 5;
if (tasks === 0) {
  console.log("Список пуст");
} else if (tasks <= 3) {
  console.log("Немного задач");
} else {
  console.log("Много задач");
} 
  */

 /* ДЗ 9*/
let a = 10;
let b = 5;
let sum = a+b;
let difference = a-b;
let multiplication = a*b;
let division = a/b;

let firstName = "Ivan";
let lastName = "Ivanov";
let fullName = firstName +" "+ lastName

console.log("Сумма: ", sum);
console.log("Разность: ", difference);
console.log("Произведение: ", multiplication);
console.log("Деление: ", division);

console.log("Полное имя: ", fullName);

let title = " ";
if (title === " "){
    console.log("Название задаи не указано");
}
else {
    console.log("Задача:", title);
}

let title = "";

if (title === "") {
    console.log("Название задачи не указано");
} else {
    console.log("Задача:", title);
}


// 9. Количество задач

let tasks = 2;

if (tasks === 0) {
    console.log("Список пуст");
} else if (tasks >= 1 && tasks <= 3) {
    console.log("Немного задач");
} else {
    console.log("Много задач");
}


// 10. Выполнена ли задача

let isCompleted = false;

if (isCompleted) {
    console.log("Задача выполнена");
} else {
    console.log("Задача ещё в работе");
}


// 11. Срочные задачи

let urgent = true;

if (tasks === 0) {
    console.log("Все задачи завершены");
} else if (tasks > 0 && urgent) {
    console.log("Есть срочные задачи");
} else {
    console.log("Задачи есть, но они не срочные");
}


// 12. Проверка ролей

let isAdmin = false;
let isModerator = true;

if (isAdmin || isModerator) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}


// ======================
// Самостоятельная часть
// ======================


// Задача "Скидка в магазине"

let amount = 3200;

if (amount === 0) {
    console.log("Корзина пуста");
} else if (amount < 1000) {
    console.log("Скидка не применяется");
} else if (amount >= 1000 && amount < 5000) {
    console.log("Скидка 5%");
} else {
    console.log("Скидка 10%");
}
