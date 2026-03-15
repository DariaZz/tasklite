const input = document.querySelector('.form-add__input');
const addButton = document.querySelector('.form-add__button');
const container = document.querySelector('.tasks');

const searchInput = document.querySelector('.toolbar__search');
const footer = document.querySelector('.footer-controls');
const sortSelect = document.querySelector('.toolbar__sort');

const tasks = [
  { text: 'Купить продукты', done: false, date: 'Сегодня, 12:00' },
  { text: 'Сделать домашку', done: true, date: 'Сегодня, 18:00' },
  { text: 'Позвонить другу', done: false, date: 'Сегодня, 20:00' },
  { text: 'Почитать книгу', done: false, date: 'Завтра, 10:00' },
  { text: 'Сходить на тренировку', done: true, date: 'Завтра, 17:00' },
  { text: 'Подготовиться к контрольной', done: false, date: 'Сегодня, 21:00' },
  { text: 'Убраться в комнате', done: false, date: 'Сегодня, 19:00' }
];

function renderAll() {
  document.querySelectorAll('.task').forEach(t => t.remove());
  tasks.forEach(task => {
  const card = renderTasks(task);
  footer.before(card);
});
}
renderAll();


function renderTasks(task) {
  container.innerHTML = '';

  tasks.forEach((task) => {
    const item = document.createElement('div');
    item.classList.add('task');

    if (task.done) item.classList.add('task--done');
    const content = document.createElement('div');
    content.classList.add('task__content');

    const title = document.createElement('div');
    title.classList.add('task__title');
    title.textContent = task.text;

    const meta = document.createElement('div');
    meta.classList.add('task__meta');
    meta.textContent = task.date;

    content.append(title, meta);
    item.append(content);

    const actions = document.createElement('div');
    actions.classList.add('task__actions');

    const editBtn = document.createElement('button');
    editBtn.classList.add('task__action', 'task__action--edit');
    editBtn.title = 'Редактировать';
    editBtn.innerHTML = `<svg 
      class="task__icon" 
      viewBox="0 0 24 24" 
      width="14" 
      height="14" 
      fill="none" 
      stroke="#6f64a3" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>`;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('task__action', 'task__action--delete');
    deleteBtn.title = 'Удалить';
    deleteBtn.innerHTML = `<svg 
      class="task__icon" 
      viewBox="0 0 24 24" 
      width="14" height="14" 
      fill="none" 
      stroke="#cb6e6e" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </svg>`;

    // Редактирование
    editBtn.addEventListener('click', () => {
      const newText = prompt('Изменить задачу:', task.text);
      if (newText && newText.trim() !== '') {
        task.text = newText.trim();
        renderAll();
      }
    });

    // Удаление
    deleteBtn.addEventListener('click', () => {
      const index = tasks.indexOf(task);
      tasks.splice(index, 1);
      renderAll();
    });

    // Отметка выполнения
    item.addEventListener('click', (e) => {
      if (e.target.closest('.task__action')) return;
      task.done = !task.done;
      renderAll();
    });
    actions.append(editBtn, deleteBtn);
    item.append(actions);
    container.append(item);
    
    return item;
  });
}
renderAll();
