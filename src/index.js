import one from './todo';

const submitButton = document.getElementById('button');

const onclick = () => {
  one();
}

submitButton.addEventListener('click', onclick);

/* const onclick = (e) => {

  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let date = document.getElementById('date').value;
  let priority = document.getElementById('priority').value;
  let done = document.getElementById('done').checked;

  e.preventDefault();
  let todo = new Todo(title, description, date, priority, done);

  console.log(todo);
} */



