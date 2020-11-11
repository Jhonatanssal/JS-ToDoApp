import Project from '../src/projects';
import Todo from '../src/todo';

const project = new Project('Test');
const todo = new Todo('Todo Test', 'Testing', '2020-11-06', 0, true);

it('checks if the project has been defined', () => {
  expect(project).toBeDefined();
});

it('checks for project creation', () => {
  expect(project.name).toBe('Test');
});

it('checks for projects array not to be null', () => {
  expect(project.projects).not.toBeNull();
});

it('checks for definition of todo in project', () => {
  project.projects.push(todo);
  expect(project.projects[0]).toBeDefined();
});

it('checks for addition of todo to project', () => {
  project.projects.push(todo);
  expect(project.projects).toContain(todo);
});
