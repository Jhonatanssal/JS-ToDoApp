import Todo from './todo';

import { Project, createProject, createStorage } from './projects';



/* const submitButton = document.getElementById('button');
const taskContainer = document.getElementById('taskContainer');

let todosArray = [];

const onclick = (e)  => {
  e.preventDefault();
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let date = document.getElementById('date').value;
  let priority = document.getElementById('priority').selectedIndex;
  let done = document.getElementById('done').checked;

  console.log(priority);
  let todo = new Todo(title, description, date, priority, done);
  addTodo(todo);
};

const addTodo = (todo) => {
   todosArray.push(todo);
   createTodo(todosArray);
}

const createTodo = (todo) =>{
  console.log(todo);
  const priorityArray = ['High Priority', 'Mid Priority', 'Low Priority'];
  taskContainer.innerHTML='';
  for(let i = 0; i < todo.length;i++){
    
    let todoC = document.createElement('div');
    let todoT = document.createElement('h2');
    let todoDes = document.createElement('p');
    let todoDate = document.createElement('p');
    
    todoT.textContent = todo[i].title;
    todoDes.textContent = todo[i].description;
    todoDate.textContent = todo[i].date;
  
    todoC.appendChild(todoT);
    todoC.appendChild(todoDes);
    todoC.appendChild(todoDate);
    taskContainer.appendChild(todoC);
  }
}

function checkDone(done) {
  if (done){
    return 'Completed'
  }else{
    return 'To Complete'
  }
}

createProject(JSON.parse(localStorage.getItem('myTodos')));

submitButton.addEventListener('click', onclick);
 */