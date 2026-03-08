



console.log(max(8, 3));  // 8
console.log(max(2, 10)); // 10

let tasks = 5

if (tasks === 0){
console.log('Нет задач')
} else if (tasks <= 3){
console.log('Мало задач')
} else {
console.log('Много задач')
}

const input = document.querySelector('.form-add__input');
const addButton = document.querySelector('.form-add__button');
const container = document.querySelector('.tasks')

function renderTask(taskData) {
const task = document.createElement('div')
task.classList.add('task')
container.append(task)

const content = document.createElement('div')
content.classList.add('task__content')
task.append(content)

const title = document.createElement('div')
title.classList.add('task__title')

const meta = document.createElement('div')
meta.classList.add('task__meta')

content.append(title, meta)

const actions = document.createElement('div')
actions.classList.add('task_actions')
task.append(actions)
}


const now = new Date();
console.log(now)

const day = now.getDate();
const month = now.getMonth();
const year  = now.getFullYear();
consol.log(`${day}:${month}:${year}`)

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
consol.log(`${hours}:${minutes}:${seconds}`)

consol.log(now.toLocaleString)

function formatDate(date){
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth()+1).toString().padStart(2, '0');
    const y = date.getFullYear();
    const h = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');
    return `${d}.${m}.${y}, ${h}:${min}`;
}

