
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('task-form');
  const input = document.getElementById('task-input');
  const list = document.getElementById('task-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) {

      input.style.border = '1px solid #e53e3e';
      setTimeout(() => input.style.border = '', 800);
      return;
    }
    addTask(text);
    input.value = '';
    input.focus();
  });

  
  function addTask(text) {
  
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;
    span.tabIndex = 0; 
    span.setAttribute('role', 'button');
    span.setAttribute('aria-pressed', 'false');

    const toggleComplete = () => {
      const completed = span.classList.toggle('completed');
      span.setAttribute('aria-pressed', String(completed));
    };
    span.addEventListener('click', toggleComplete);
    span.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        toggleComplete();
      }
    });

    const del = document.createElement('button');
    del.className = 'btn-delete';
    del.type = 'button';
    del.textContent = 'Delete';
    del.setAttribute('aria-label', `Delete task ${text}`);
    del.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(del);
    list.appendChild(li);

    li.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});
