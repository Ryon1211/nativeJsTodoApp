import { element } from "./html-util.js";
import {TodoItemView} from "./TodoItemView";

export class TodoListView {
  createElement(todoItems, { onUpdateTodo, onDeleteTodo }) {
    const todoListElem = element`<ul />`;
    // const todoListElem = element(['<ul />']);
    todoItems.forEach(todoItem => {
      const todoItemView = new TodoItemView();
      const todoItemElem = todoItemView.createElement(todoItem, {onUpdateTodo, onDeleteTodo});
      todoListElem.appendChild(todoItemElem);
    });
    return todoListElem;
  }
}