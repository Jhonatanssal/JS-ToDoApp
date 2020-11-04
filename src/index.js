import { Project, createProject, createStorage } from './projects';

const botonProject = document.getElementById('botonProject');
let todosArray = [];

function initTodo(){
  botonProject.addEventListener('click', (e) => {   
    const nameProject = document.getElementById('projectName').value;
    const project = new Project(nameProject);
    
    createStorage(project);
    createProject(myTodos[project].projects);
  });
};



initTodo();

let myTodos = JSON.parse(localStorage.getItem('myTodos'));

createProject(JSON.parse(localStorage.getItem('myTodos')));
