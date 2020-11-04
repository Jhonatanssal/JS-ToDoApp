import Todo from './todo';

const onclick = (project) => {
 
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let date = document.getElementById('date').value;
  let priority = document.getElementById('priority').selectedIndex;
  let done = document.getElementById('done').checked;

  let todo = new Todo(title, description, date, priority, done);
  const myTodos = JSON.parse(localStorage.getItem('myTodos'));
  myTodos[project].projects.unshift(todo);
  localStorage.setItem('myTodos', JSON.stringify(myTodos));
};

export default onclick;