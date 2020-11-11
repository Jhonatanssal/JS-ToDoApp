import createStorage from '../src/storage';

const project1={name:'project1', projects:[{
    title: 'Hello', description: 'Hello universe', date: '2020-11-06', priotiry: 0, done: true,
  }]}

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
  };
  
  global.localStorage = new LocalStorageMock;

  createStorage(project1)

  let item1=JSON.parse(localStorage.getItem('myTodos'));

it('checks add project to storage', () => {
    expect(item1[1].name).toEqual('project1')
});

it('checks default project createrd by default storage', () => {
    expect(item1[0].name).toEqual('Daily')
});

it('checks for the todos in the storage', () => {
    expect(item1[0].projects.length).toEqual(3)
});

it('checks for the properties of the todos in storage', () => {
    expect(item1[0].projects[0].title).toEqual('Run')
});

it('checks for the properties of the object just added to storage', () => {
    expect(item1[1].projects[0].title).toEqual('Hello')
});

it('checks for the properties of the object just added to storage', () => {
    expect(item1[1].projects[0].description).toEqual('Hello universe')
});

