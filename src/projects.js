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
  
  createStorage(project);
  createProject(JSON.parse(localStorage.getItem('myTodos')))
});




const createProject = (projects) => {
  projectsCont.innerHTML = '';
  projectsCont.classList.add('align');
  for (let i = 0; i < projects.length; i++) {
    const proC = document.createElement('div');
    const proP = document.createElement('h1');
    const proB = document.createElement('button');

    proC.classList.add('card', 'p-2');
    proB.textContent = 'Add Task';
    proP.textContent = projects[i].name;
    proB.type = 'button';
    proB.className = 'btn btn-primary';
    proB.dataToggle = 'modal';
    proB.dataTarget = '#exampleModal';


    proB.addEventListener('click',()=>{

        proC.innerHTML += `<div class="taskForm">
        <form id="form">
          <div class="taskTitle form-group">
            <input type="text" id="title" placeholder="Title" class="form-control">
          </div>
          <div class="description form-group">
            <input type="text" id="description" placeholder="Description" class="form-control">
          </div>
          <div class="date form-group">
            <input type="date" id="date" class="form-control">
          </div>
          <div class="priority form-group">
            <select name="weapon" id="priority" class="form-control">
              <option value="throwing_stars">High Priority</option>
              <option value="sword">Mid Priority</option>
              <option value="staff">Low Priority</option>
            </select>
          </div>
          <div class="done form-group">
            <label for="done">Completed: </label>
            <input type="checkbox" id="done" name="done" class="form-control">
          </div>
          <input type="submit" id="button" class="btn btn-primary btn-block">
        </form>
      </div>`
    })

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

export { Project, createProject, createStorage };
