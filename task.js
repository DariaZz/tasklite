/* Урок 19 : операторы и условия */
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
  

 /* ДЗ 9*/
let a = 10;
let b = 5;
let sum = a+b;
let difference = a-b;
let multiplication = a * b;
let division = a/b;

let firstName = "Иван";
let lastName = "Иванов";
let fullName = firstName +" "+ lastName

console.log("Сумма: ", sum);
console.log("Разность: ", difference);
console.log("Произведение: ", multiplication);
console.log("Деление: ", division);

console.log("Полное имя: ", fullName);



let title = " ";
if (title === " "){
    console.log("Название задачи не указано");
}
else {
    console.log("Задача:", title);
}


let tasks = 2;

if (tasks === 0) {
    console.log("Список пуст");
} else if (tasks >= 1 && tasks <= 3) {
    console.log("Немного задач");
} else {
    console.log("Много задач");
}





let isCompleted = false;

if (isCompleted) {
    console.log("Задача выполнена");
} else {
    console.log("Задача ещё в работе");
}





let urgent = true;

if (tasks === 0) {
    console.log("Все задачи завершены");
} else if (tasks > 0 && urgent) {
    console.log("Есть срочные задачи");
} else {
    console.log("Задачи есть, но они не срочные");
}





let isAdmin = false;
let isModerator = true;

if (isAdmin || isModerator) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}



/* Самостоятельная часть*/


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

/* урок 20*/

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));  // 7
console.log(sum(10, 5)); // 15



function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(8, 3));  // 8
console.log(max(2, 10)); // 10


function printTask(title, status) {
  return "Задача: " + title + " | Статус: " + status;
}

console.log(printTask("Купить молоко", "активна"));
console.log(printTask("Сходить в спортзал", "выполнена"));

function isTaskDone(status) {
  return status === "выполнена";
}

console.log(isTaskDone("выполнена")); // true
console.log(isTaskDone("активна"));   // false


function greetUser(name) {
  return "Добро пожаловать, " + name + "!";
}

console.log(greetUser("Катя"));
console.log(greetUser("Иван"));

function taskSummary(total, done) {
  let active = total - done;
  return "Всего: " + total + " | Выполнено: " + done + " | Активных: " + active;
}

console.log(taskSummary(5, 3));
console.log(taskSummary(10, 4));

/*Урок 21*/

let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);              // первый элемент — 10
console.log(numbers[numbers.length-1]); // последний элемент — 50




let cities = ["Москва", "Париж", "Берлин", "Токио"];
cities[2] = "Лондон";  
console.log(cities); 
// ["Москва", "Париж", "Лондон", "Токио"]




let task = {
  id: 1,
  title: "Купить молоко",
  status: "активна"
};
console.log(task.id);     // 1
console.log(task.title);  // "Купить молоко"
console.log(task.status); // "активна"





let tasks = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
  { id: 3, title: "Сделать уроки", status: "активна" }
];
console.log(tasks[0].title);  // "Купить молоко"
console.log(tasks[1].status); // "выполнена"




tasks[0].status = "выполнена";
console.log(tasks[0]); 
// { id: 1, title: "Купить молоко", status: "выполнена" }



tasks.push({ id: 4, title: "Прогулка", status: "активна" });
console.log(tasks);



let user = {
  name: "Анна",
  tasks: tasks
};

console.log(user.name);         // "Анна"
console.log(user.tasks.length); // 4

/*Дз 10*/
function findTaskByTitle(tasks, title) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title === title) {
      return tasks[i];
    }
  }

  return "Задача не найдена";
}


console.log(findTaskByTitle(tasks, "Изучить JS"));
console.log(findTaskByTitle(tasks, "Не существует"));
