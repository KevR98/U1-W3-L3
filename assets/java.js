const myForm = document.getElementById('newToDo-form');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const toDoInput = document.getElementById('toDo');

  const addtodo = toDoInput.value;

  // CREO UNA LISTA VUOTA

  const task = document.createElement('li');
  task.classList.add('listaTodo');
  task.id = 'barra';

  // AGGIUNGO LE LISTE OGNI VOLTA CHE LE GENERO

  task.innerHTML = `
  ${addtodo}
  <button onclick="remove(event)" class="bottoneRemove">✕</button>
  `;

  const container = document.getElementById('saveToDo');
  container.appendChild(task);

  document.getElementById('barra').addEventListener('click', (e) => {
    e.target.classList.toggle('barrato');
  });
});

// ELLIMINO LE LISTE CHE VOGLIO

const remove = function (e) {
  e.target.parentElement.remove();
};
