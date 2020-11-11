import Todo from '../src/todo';

const todo = new Todo('Todo Test', 'Testing', '2020-11-06', 0, true);

it('checks for todo creation', () => {
  expect(todo).toBeDefined();
});

it('checks for todo title', () => {
  expect(todo.title).toBe('Todo Test');
});

it('checks for todo description', () => {
  expect(todo.description).toBe('Testing');
});

it('checks for todo date', () => {
  expect(todo.date).toBe('2020-11-06');
});

it('checks for todo priority', () => {
  expect(todo.priotiry).toBe(0);
});

it('checks for todo date', () => {
  expect(todo.done).toBe(true);
});
