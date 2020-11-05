import onclick from './onclick';
import editForm from './editForm';

const projectsCont = document.getElementById('projectsContainer');

const priorityText = (task) => {
  const arr = ['High Priority', 'Mid Priority', 'Low Priotity'];
  return arr[task];
};

const completedText = (completed) => {
  if (completed) {
    return 'Completed';
  }
  return 'To Do';
};

const createProject = (projects) => {
  projectsCont.innerHTML = '';
  projectsCont.classList.add('align');


  for (let i = 0; i < projects.length; i += 1) {
    const proC = document.createElement('div');
    const proP = document.createElement('h1');
    const proB = document.createElement('button');

    proC.id = 'formC';
    proC.classList.add('card', 'p-2');
    proB.textContent = 'Add Task';
    proP.textContent = projects[i].name;
    proB.type = 'submit';
    proB.className = 'btn btn-primary';
    proB.dataToggle = 'modal';
    proB.dataTarget = '#exampleModal';

    proC.appendChild(proP);

    for (let j = 0; j < projects[i].projects.length; j += 1) {
      const taskCont = document.createElement('div');
      const taskT = document.createElement('h3');
      const taskD = document.createElement('p');
      const taskDate = document.createElement('p');
      const taskPriority = document.createElement('p');
      const taskC = document.createElement('p');
      const taskEdit = document.createElement('button');
      const taskDelete = document.createElement('button');
      taskCont.classList.add('card', 'border', 'p-3', 'mb-2');
      const taskInfoContainer = document.createElement('div');
      const showTask = document.createElement('button');
      const hideTask = document.createElement('button');

      taskT.textContent = projects[i].projects[j].title;
      taskD.textContent = projects[i].projects[j].description;
      taskDate.textContent = projects[i].projects[j].date;
      taskPriority.textContent = priorityText(projects[i].projects[j].priotiry);
      taskC.textContent = completedText(projects[i].projects[j].done);
      taskEdit.textContent = 'Edit';
      taskDelete.textContent = 'Delete';
      taskEdit.className = 'btn btn-success btn-block';
      taskDelete.className = 'btn btn-danger btn-block mt-2';
      taskInfoContainer.style.display = 'none';
      taskInfoContainer.id = 'infoTaskContainer';
      showTask.id = 'showTask';
      hideTask.id = 'hideTask';
      showTask.className = 'btn btn-info';
      hideTask.className = 'btn btn-warning';
      hideTask.style.display = 'none';
      hideTask.textContent = 'Hide';
      showTask.textContent = 'Show';

      taskDelete.addEventListener('click', (e) => {
        e.preventDefault();
        const myTodos = JSON.parse(localStorage.getItem('myTodos'));
        myTodos[i].projects.splice(j, 1);

        localStorage.setItem('myTodos', JSON.stringify(myTodos));

        createProject(JSON.parse(localStorage.getItem('myTodos')));
      });
      taskEdit.addEventListener('click', (e) => {
        e.preventDefault();
        proC.innerHTML += '';
        editForm(i, j);
      });

      showTask.addEventListener('click', () => {
        taskInfoContainer.style.display = 'block';
        showTask.style.display = 'none';
        hideTask.style.display = 'block';
      });

      hideTask.addEventListener('click', () => {
        taskInfoContainer.style.display = 'none';
        showTask.style.display = 'block';
        hideTask.style.display = 'none';
      });

      taskCont.appendChild(taskT);
      taskCont.appendChild(taskD);
      taskCont.appendChild(showTask);
      taskCont.appendChild(hideTask);
      taskInfoContainer.appendChild(taskDate);
      taskInfoContainer.appendChild(taskPriority);
      taskInfoContainer.appendChild(taskC);
      taskInfoContainer.appendChild(taskEdit);
      taskInfoContainer.appendChild(taskDelete);
      taskCont.appendChild(taskInfoContainer);

      proC.appendChild(taskCont);
    }

    proB.addEventListener('click', () => {
      const modall = document.createElement('div');
      modall.className = 'modd';
      document.body.appendChild(modall);
      projectsCont.className = 'fadee align';
      const contF = document.createElement('div');
      const form = document.createElement('form');
      const contI1 = document.createElement('div');
      const input1 = document.createElement('input');
      const contI2 = document.createElement('div');
      const input2 = document.createElement('input');
      const contI3 = document.createElement('div');
      const input3 = document.createElement('input');
      const contI4 = document.createElement('div');
      const sele = document.createElement('select');
      const opt1 = document.createElement('option');
      const opt2 = document.createElement('option');
      const opt3 = document.createElement('option');
      const contI5 = document.createElement('div');
      const input5 = document.createElement('input');
      const label5 = document.createElement('label');
      const input6 = document.createElement('input');

      contF.className = 'taskForm';
      form.id = 'form';
      form.classList = 'p-3 border';
      contI1.className = 'taskTitle form-group';
      input1.type = 'text';
      input1.id = 'title';
      input1.placeholder = 'Title';
      input1.className = 'form-control';
      input1.required = true;
      contI2.className = 'description form-group';
      input2.type = 'text';
      input2.id = 'description';
      input2.required = true;
      input2.placeholder = 'Description';
      input2.className = 'form-control';
      contI3.className = 'date form-group';
      input3.type = 'date';
      input3.id = 'date';
      input3.required = true;
      input3.className = 'form-control';
      contI4.className = 'priority form-group';
      sele.name = 'weapon';
      sele.id = 'priority';
      sele.className = 'form-control';
      opt1.value = 'High Priority';
      opt1.textContent = 'High Priority';
      opt2.value = 'Mid Priority';
      opt2.textContent = 'Mid Priority';
      opt3.value = 'Low Priority';
      opt3.textContent = 'Low Priority';
      contI5.className = 'done form-group';
      input5.type = 'checkbox';
      input5.id = 'done';
      input5.name = 'done';
      input5.className = 'form-control';
      label5.for = 'done';
      label5.textContent = 'Completed: ';
      input6.type = 'submit';
      input6.id = 'button';
      input6.value = 'Create Task';
      input6.className = 'btn btn-primary btn-block';

      contI5.appendChild(input5);
      contI5.appendChild(label5);
      sele.appendChild(opt1);
      sele.appendChild(opt2);
      sele.appendChild(opt3);
      contI4.appendChild(sele);
      contI3.appendChild(input3);
      contI2.appendChild(input2);
      contI1.appendChild(input1);
      form.appendChild(contI1);
      form.appendChild(contI2);
      form.appendChild(contI3);
      form.appendChild(contI4);
      form.appendChild(contI5);
      form.appendChild(input6);
      contF.appendChild(form);
      modall.appendChild(contF);
      input6.addEventListener('click', () => {
        if (input1.value !== '' && input2.value !== '' && input3.value !== '') {
          onclick(i);
        }
      });
    });

    proC.appendChild(proB);
    projectsCont.appendChild(proC);
  }
};

export default createProject;