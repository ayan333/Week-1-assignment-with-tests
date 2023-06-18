/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
    this.task_list = [];
  }
  add(task){
    this.task_list.push(task);
  }
  remove(task_idx){
    if(task_idx >=0 && task_idx < this.task_list.length){
      this.task_list.splice(task_idx,1);
    }
  }
  update(task_idx, new_todo){
    if(task_idx >=0 && task_idx < this.task_list.length){
      this.task_list[task_idx] = new_todo;
    }
  }
  getAll(){
    return this.task_list;
  }
  get(task_idx){
    if(task_idx >=0 && task_idx < this.task_list.length){
      return this.task_list[task_idx];
    }
    else{
      return null;
    }
  }
  clear(){
    this.task_list.length = 0;
  }
}

module.exports = Todo;
