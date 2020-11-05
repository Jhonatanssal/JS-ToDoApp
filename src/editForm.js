/* eslint-disable import/no-cycle */

import update from './edit';

const editForm = (i, j, proC) => {
  const myTodos = JSON.parse(localStorage.getItem('myTodos'));
  const editData = myTodos[i].projects[j];

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
  contI1.className = 'taskTitle form-group';
  input1.type = 'text';
  input1.id = 'title';
  input1.placeholder = 'Title';
  input1.className = 'form-control';
  input1.value = editData.title;
  contI2.className = 'description form-group';
  input2.type = 'text';
  input2.id = 'description';
  input2.placeholder = 'Description';
  input2.className = 'form-control';
  input2.value = editData.description;
  contI3.className = 'date form-group';
  input3.type = 'date';
  input3.id = 'date';
  input3.className = 'form-control';
  input3.value = editData.date;
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
  sele.value = editData.priotiry;
  contI5.className = 'done form-group';
  input5.type = 'checkbox';
  input5.id = 'done';
  input5.name = 'done';
  input5.className = 'form-control';
  label5.for = 'done';
  label5.textContent = 'Completed: ';
  input5.value = editData.done;
  input6.type = 'submit';
  input6.id = 'button';
  input6.className = 'btn btn-primary btn-block';

  input6.addEventListener('click', () => {
    update(i, j);
  });

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
  proC.appendChild(contF);
};

export default editForm;