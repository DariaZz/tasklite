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


/*Урок 22*/

function filterByStatus(tasks, status) {
  return tasks.filter(function (task) {
    return task.status === status;
  });
}
// Пример
let tasks1 = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
  { id: 3, title: "Сделать уроки",  status: "активна" }
];

console.log(filterByStatus(tasks1, "активна"));
// => [{ id:1, ...}, { id:3, ...}]





function sortByTitleAsc(tasks) {
  tasks.sort(function (a, b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });

  return tasks;
}
// Пример
let tasks2 = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
  { id: 3, title: "Сделать уроки",  status: "активна" }
];

console.log(sortByTitleAsc(tasks2));
/*
[
  { id: 3, title: "Сделать уроки",  status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
  { id: 1, title: "Купить молоко",   status: "активна" }
]
*/




function searchByTitle(tasks, query) {
  const q = query.toLowerCase();
  return tasks.filter(function (task) {
    return task.title.toLowerCase().indexOf(q) !== -1;
  });
}
// Пример
let tasks3 = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
  { id: 3, title: "Сделать уроки",  status: "активна" }
];
console.log(searchByTitle(tasks3, "куп"));
/*
[{ id:1, title:"Купить молоко", status:"активна" }]
*/









function removeTaskById(tasks, id) {
  return tasks.filter(function (task) {
    return task.id !== id;
  });
}
// Пример
let tasks4 = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" },
  { id: 3, title: "Сделать уроки",  status: "активна" }
];

console.log(removeTaskById(tasks4, 2));
// => [{ id:1, ...}, { id:3, ...}]






function toggleTaskStatus(tasks, id) {
  return tasks.map(function (task) {
    if (task.id === id) {
      const newStatus =
        task.status === "выполнена" ? "активна" : "выполнена";

      return {
        id: task.id,
        title: task.title,
        status: newStatus,
      };
    }

    return task;
  });
}
// Пример
let tasks5 = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Позвонить врачу", status: "выполнена" }
];
console.log(toggleTaskStatus(tasks5, 1));
// => [{ id:1, title:"Купить молоко", status:"выполнена" }, { id:2, ...}]




/*Урок 23 Циклы*/

et tasks = [
  { id: 1, title: "Купить молоко", status: "активна" },
  { id: 2, title: "Сходить в спортзал", status: "выполнена" },
  { id: 3, title: "Позвонить другу", status: "активна" },
  { id: 4, title: "Прочитать книгу", status: "выполнена" },
  { id: 5, title: "Сделать проект", status: "активна" }
];




for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i].id + ":", tasks[i].title);
}





for (let task of tasks) {
  console.log(task.id + ":", task.title);
}






let i = 0;
let total = 0;
let done = 0;
let active = 0;

while (i < tasks.length) {
  total++;
  if (tasks[i].status === "выполнена") {
    done++;
  } else {
    active++;
  }
  i++;
}
console.log("Всего:", total, "| Выполнено:", done, "| Активных:", active);






for (let task of tasks) {
  if (task.status === "активна") {
    console.log("Активная задача:", task.title);
  }
}





tasks.forEach(task => {
  console.log("#" + task.id + " " + task.title + " (" + task.status + ")");
});








let searchTitle = "Купить молоко";
let found = null;
for (let task of tasks) {
  if (task.title === searchTitle) {
    found = task;
    break;
  }
}
if (found) {
  console.log("Найдена задача:", found);
} else {
  console.log("Задача не найдена");
}



let activeTasks = [];
for (let task of tasks) {
  if (task.status === "активна") {
    activeTasks.push(task);
  }
}
console.log("Активные задачи:", activeTasks);

/*Дз 11*/
// 12. Удаление задачи по id
function removeTask(tasks, id) {
  let result = [];

  for (let task of tasks) {
    if (task.id !== id) {
      result.push(task);
    }
  }

  return result;
}

console.log(removeTask(tasks, 2));


// 13. Переключение статуса
function toggleTaskStatus(tasks, id) {
  for (let task of tasks) {
    if (task.id === id) {
      task.status = task.status === "активна" ? "выполнена" : "активна";
    }
  }
}

toggleTaskStatus(tasks, 1);
console.log(tasks);


// 14. Очистка завершённых
function clearCompleted(tasks) {
  let result = [];

  for (let task of tasks) {
    if (task.status !== "выполнена") {
      result.push(task);
    }
  }

  return result;
}

console.log(clearCompleted(tasks));

///cамостоятельная ччасть(поси по ключевым словам)
function findTaskByKeyword(tasks, keyword) {
  for (let task of tasks) {
    if (task.title.toLowerCase().includes(keyword.toLowerCase())) {
      return task;
    }
  }

  return "Задача не найдена";
}

console.log(findTaskByKeyword(tasks, "книг"));
console.log(findTaskByKeyword(tasks, "спорт"));


