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

    proC.classList.add('background-red');
    proB.textContent = 'Save';
    proP.textContent = projects[i].name;
    proB.type='button';
    proB.className='btn btn-primary';
    proB.dataToggle='modal';
    proB.dataTarget='#exampleModal';


    proB.addEventListener('click',()=>{
        let modal=document.getElementsById('modal');
        modal.innerHTML=`<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
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
