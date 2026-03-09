/*24 урок 16.02  DOM*/
const input = document.querySelector('.form-add__input');
const addButton = document.querySelector('.form-add__button');
const container = document.querySelector('.tasks');

const task = document.createElement('div');
task.classList.add('task');
container.append(task);

const content = document.createElement('div');
content.classList.add('task__content');
task.append(content);

const title = document.createElement('div');
title.classList.add('task__title');
const meta = document.createElement('div');
meta.classList.add('task__meta');
content.append(title, meta);

const actions = document.createElement('div');
actions.classList.add('task__actions');
task.append(actions);



/*25 урок 18.02  Функции-шаблоны*/
