import createProject from './createProject';

const update = (i, j) => {
  const taskTitleEdit = document.getElementById('title').value;
  const taskDescriptionEdit = document.getElementById('description').value;
  const taskDateEdit = document.getElementById('date').value;
  const taskPriorityEdit = document.getElementById('priority').selectedIndex;
  const taskCompletedEdit = document.getElementById('done').checked;

  const myTodos = JSON.parse(localStorage.getItem('myTodos'));

  myTodos[i].projects[j].title = taskTitleEdit;
  myTodos[i].projects[j].description = taskDescriptionEdit;
  myTodos[i].projects[j].date = taskDateEdit;
  myTodos[i].projects[j].priority = taskPriorityEdit;
  myTodos[i].projects[j].done = taskCompletedEdit;

  localStorage.setItem('myTodos', JSON.stringify(myTodos));
  createProject(JSON.parse(localStorage.getItem('myTodos')));
};

export default update;