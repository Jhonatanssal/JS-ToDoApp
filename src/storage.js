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

export default createStorage;