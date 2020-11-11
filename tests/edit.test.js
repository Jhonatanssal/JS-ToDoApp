import createStorage from '../src/storage';

document.innerHTML = '<form id="form" class="p-3 border"><div class="taskTitle form-group"><input type="text" id="title" placeholder="Title" class="form-control" required="" value="Edited name">Edited name</div><div class="description form-group"><input type="text" id="description" required="" placeholder="Description" class="form-control" value="Edited description"></div><div class="date form-group"><input type="date" id="date" required="" class="form-control" value="2021-01-01"></div><div class="priority form-group"><select name="weapon" id="priority" class="form-control" selectedIndex="1"><option value="High Priority">High Priority</option><option value="Mid Priority">Mid Priority</option><option value="Low Priority">Low Priority</option></select></div><div class="done form-group"><input type="checkbox" id="done" name="done" class="form-control" value="true" checked="true"><label>Completed: </label></div><input type="submit" id="button" value="Update Task" class="btn btn-primary btn-block"></form>';

const project1 = {
  name: 'project1',
  projects: [{
    title: 'Hello', description: 'Hello universe', date: '2020-11-06', priotiry: 0, done: true,
  }],
};

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

createStorage(project1);

const myTodos = JSON.parse(localStorage.getItem('myTodos'));

const editProject = myTodos[1];

it('checks if the project1 has been defined', () => {
  expect(editProject.name).toBeDefined();
});

it('checks for the update of project1 title', () => {
  const editedTitle = 'Edited title';
  myTodos[1].projects[0].title = editedTitle;
  expect(myTodos[1].projects[0].title).toBe('Edited title');
});

it('checks for the update of one task', () => {
  const editedDes = 'Edited description';
  myTodos[1].projects[0].description = editedDes;
  expect(myTodos[1].projects[0].description).toBe('Edited description');
});

it('checks for the update of one task', () => {
  const editedDate = '2021-01-01';
  myTodos[1].projects[0].date = editedDate;
  expect(myTodos[1].projects[0].date).toBe('2021-01-01');
});

it('checks for the update of one task', () => {
  const editedPriority = 2;
  myTodos[1].projects[0].priotiry = editedPriority;
  expect(myTodos[1].projects[0].priotiry).toBe(2);
});

it('checks for the update of one task', () => {
  const editedCompletition = false;
  myTodos[1].projects[0].title = editedCompletition;
  expect(myTodos[1].projects[0].title).toBe(false);
});
