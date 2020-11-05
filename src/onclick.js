import Todo from './todo';

const onclick = (project) => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const priority = document.getElementById('priority').selectedIndex;
  const done = document.getElementById('done').checked;

  const todo = new Todo(title, description, date, priority, done);
  const myTodos = JSON.parse(localStorage.getItem('myTodos'));
  myTodos[project].projects.unshift(todo);
  localStorage.setItem('myTodos', JSON.stringify(myTodos));
};

export default onclick;