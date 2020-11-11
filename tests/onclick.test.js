import Project from '../src/projects';
import Todo from '../src/todo';

const project = new Project('Test project');
const todo = new Todo('Test', 'testing', '2020-11-23', 0, true);
const myTodos = [];
myTodos.push(project);
myTodos[0].projects.unshift(todo);

it('checks if the project was storaged', () => {
  expect(myTodos).toContain(project);
});

it('checks if the project has been defined', () => {
  expect(myTodos[0]).toBeDefined();
});

it('checks if the project storage array has been defined', () => {
  expect(myTodos[0].projects).toBeDefined();
});

it('checks if the project storage array has the todo', () => {
  expect(myTodos[0].projects).toContain(todo);
});
