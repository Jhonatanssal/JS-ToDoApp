import Todo from "./todo";

const botonProject = document.getElementById('botonProject');
const projectsCont = document.getElementById('projectsContainer');

class Project{
    constructor(name,projects){
        this.projects=projects
        this.name = name;

    }

    
}
let projects=[];
botonProject.addEventListener('click',() =>{
    let todos= [];
    const nameProject=document.querySelector('.projectForm').value;
    const project=new Project(nameProject,todos);
    addProject(project)

});

const addProject = (project) => {
    projects.push(project);
    createProject(projects);
}

const createProject = (projects) => {
    projectsCont.innerHTML='';
    for(let i = 0; i< projects.length; i++){
        const proC = document.createElement('div');
        const prpP = document.createElement('p');
        const proB = document.createElement('button');

        
        proP.textContent=projects[i].name;
        proB.addEventListener('click', () => {
            new Todo()
        })


    }
    


}

let projects = [];
const projectCont=[];

export default Project; 