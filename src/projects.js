// import Todo from "./todo";

const botonProject = document.getElementById('botonProject');
const projectsCont = document.getElementById('projectsContainer');

class Project {
  constructor(name, projects) {
    this.name = name;
    this.projects = projects;
  }
}

const projects = [];

botonProject.addEventListener('click', (e) => {
  e.preventDefault();
  const todos = [];
  const nameProject = document.getElementById('projectName').value;
  const project = new Project(nameProject, todos);
  addProject(project);
  createStorage(project);
});

const addProject = (project) => {
  projects.push(project);
  createProject(projects);
};

const createProject = (projects) => {
  projectsCont.innerHTML = '';
  projectsCont.classList.add('align');
  for (let i = 0; i < projects.length; i++) {
    const proC = document.createElement('div');
    const proP = document.createElement('h1');
    const proB = document.createElement('button');

    proC.classList.add('background-red');
    proB.textContent = 'Save';
    proP.textContent = projects[i].name;

    proC.appendChild(proP);
    proC.appendChild(proB);
    projectsCont.appendChild(proC);
  }
};

function createStorage(list) {
  if (localStorage.getItem('myTodos') === null) {
    const myTodos = [];
    myTodos.unshift(list);
    localStorage.setItem('myTodos', JSON.stringify(myTodos));
  } else {
    const myTodos = JSON.parse(localStorage.getItem('myTodos'));
    myTodos.unshift(list);
    localStorage.setItem('myTodos', JSON.stringify(myTodos));
  }
}
