import Project from '../src/projects';
import Todo from '../src/todo';

const project = new Project('Test');
const todo = new Todo('Todo Test', 'Testing', '2020-11-06', 0, true);

it('checks for project creation', () => {
  expect(project).toBeDefined();
});

it('checks for project creation', () => {
  expect(project.name).toBe('Test');
});

it('checks for project creation', () => {
  project.projects.push(todo);
  expect(project.projects).toContain(todo);
});
