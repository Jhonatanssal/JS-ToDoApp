function createStorage(list) {
  if (localStorage.getItem('myTodos') === null) {
    const myTodos = [{
      name: 'Daily',
      projects: [{
        title: 'Run', description: 'Go to run', date: '2020-11-06', priotiry: 0, done: true,
      }, {
        title: 'Hacking Nasa', description: "Let's hack the Nasa", date: '2020-11-06', priotiry: 0, done: true,
      }, {
        title: 'Buy a Tesla', description: 'Go to buy a tesla', date: '2020-11-06', priotiry: 0, done: false,
      }],
    }];
    myTodos.push(list);
    localStorage.setItem('myTodos', JSON.stringify(myTodos));
  } else {
    const myTodos = JSON.parse(localStorage.getItem('myTodos'));
    myTodos.push(list);
    localStorage.setItem('myTodos', JSON.stringify(myTodos));
  }
}

export default createStorage;