// Creo una varibile del form per poterlo lavorare
const myForm = document.getElementById('newToDo-form');

// Creo una funzione listener alla variabile form
myForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita che il si resetti automaticamente

  // Creo una variabile dall'input per poterlo lavorare
  const toDoInput = document.getElementById('toDo');
  const addtodo = toDoInput.value; // Dichiaro una varibile di tipo value all'input

  // Crea un tag lista
  const task = document.createElement('li');
  task.classList.add('listaTodo'); // Aggiungo una classe

  // Creo un tag span
  const testoTodo = document.createElement('span');
  testoTodo.classList.add('testoTodo'); // Aggiungo una classe
  // Dichiaro il testo dello span uguale alla lista creata
  testoTodo.textContent = addtodo;

  // Creo un tag button
  const rimuovi = document.createElement('button');
  rimuovi.classList.add('bottoneRemove'); // Aggiungo una lista
  rimuovi.innerHTML = `❌`; // Metto un test all'interno del bottone

  // Creo un evento listener che rimuove la lista al click del bottone
  rimuovi.addEventListener('click', (e) => {
    task.remove();
  });

  // Appendo gli elementi
  task.appendChild(testoTodo); // Task è il padre di testoTodo
  task.appendChild(rimuovi); // Task è il padre di rimuovi

  // Creo una variabile
  const container = document.getElementById('saveToDo');
  container.appendChild(task); // Container è il padre di task

  // Creo un'evento listener che al click del testo viene barrata
  testoTodo.addEventListener('click', () => {
    // Al click del testo attiva tramite il tag impostato su CSS
    testoTodo.classList.toggle('barrato');
  });

  // Resetto la funzione myForm ogni volta che completo tutte le operazioni
  myForm.reset();
});
