import Project from './projects';
import createStorage from './storage';
import createProject from './createProject';

const botonProject = document.getElementById('botonProject');

function initTodo() {
  botonProject.addEventListener('click', () => {
    const nameProject = document.getElementById('projectName').value;
    const project = new Project(nameProject);

    const myTodos = JSON.parse(localStorage.getItem('myTodos'));

    createStorage(project);
    createProject(myTodos[project].projects);
  });
}

initTodo();

createProject(JSON.parse(localStorage.getItem('myTodos')));
