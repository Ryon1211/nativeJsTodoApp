import {element} from "./html-util.js";

export class TodoItemView {
  createElement(todoItem, {onUpdateTodo, onDeleteTodo}) {
      const todoItemElem = todoItem.completed
        ? element`<li><input type="checkbox" class="checkbox" checked><s>${todoItem.title}</s><button class="delete">x</button></li>`
        : element`<li><input type="checkbox" class="checkbox">${todoItem.title}<button class="delete">x</button></li>`;
      // const todoItemElem = element(['<li>','</li>'],[item.title]);

    const inputCheckboxElem = todoItemElem.querySelector('.checkbox');
    inputCheckboxElem.addEventListener('change', () => {
      onUpdateTodo({
        id: todoItem.id,
        completed: !todoItem.completed
      });
    });
    const deleteButtonElem = todoItemElem.querySelector('.delete');
    deleteButtonElem.addEventListener('click', () => {
      onDeleteTodo({
        id:todoItem.id
      });
    });

    return todoItemElem;
  }
}