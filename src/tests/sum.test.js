import { expect, test } from 'vitest';

const todos = [];
const archive = [];

const myTest = test.extend({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  todos: async ({ task }, use) => {
    todos.push(1, 2, 3);
    await use(todos);
    todos.length = 0;
  },
  archive,
});

myTest('add item', ({ todos }) => {
  expect(todos.length).toBe(3);

  todos.push(4);
  expect(todos.length).toBe(4);
});
