import Project from './projects';

class Todo extends Project {
  constructor(title, description, date, priority, done) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priotiry = priority;
    this.done = done;
  }
}

export default Todo;