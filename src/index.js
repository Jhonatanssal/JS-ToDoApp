import Project from './projects';
import createStorage from './storage';
import createProject from './createProject';

const botonProject = document.getElementById('botonProject');

function initTodo() {
  botonProject.addEventListener('click', () => {
    const nameProject = document.getElementById('projectName').value;
    const project = new Project(nameProject);

    createStorage(project);
    createProject(myTodos[project].projects);
  });
}

initTodo();

let myTodos = JSON.parse(localStorage.getItem('myTodos'));

createProject(JSON.parse(localStorage.getItem('myTodos')));
