import { EventEmitter } from "../EventEmitter.js";
import {TodoItemModel} from "./TodoItemModel";

export class TodoListModel extends EventEmitter {
  constructor(items = []) {
    super();
    this.items = items;
  }

  addSavedTodo(items) {
    if(!items){
      return;
    }
    items.forEach(item => {
      const title = item.title;
      const completed = item.completed;
      this.addTodo(new TodoItemModel({title, completed}));
    });
  }

  getTotalCount() {
    return this.items.length;
  }

  getTodoItems() {
    return this.items;
  }

  onChange(listener) {
    this.addEventListener("change", listener);
  }

  offChange(listener) {
    this.removeEventListener("change", listener);
  }

  emitChange() {
    this.emit("change");
  }

  addTodo(todoItem) {
    if(todoItem.isEmptyTitle()){
      return;
    }
      this.items.push(todoItem);
      this.emitChange();
  }

  updateTodo({id, completed}) {
    const todoItem = this.items.find(todo => todo.id === id);
    if(!todoItem) {
      return;
    }
    todoItem.completed = completed;
    this.emitChange();
  }

  deleteTodo({id}) {
    this.items = this.items.filter(todo => {
      return todo.id !== id;
    });
    this.emitChange();
  }

  deleteAllTodo() {
    this.items = [];
    this.emitChange();
  }
}