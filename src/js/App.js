import { TodoItemModel} from "./model/TodoItemModel.js";
import { TodoListModel } from "./model/TodoListModel.js";
import { TodoListView } from "./view/TodoListView.js";
import { Store } from "./Store.js";
import { render } from './view/html-util.js';

export class App {
  constructor({ formElem, inputElem, containerElem, todoItemCountElem }) {
    this.todoListModel = new TodoListModel();
    this.todoListView = new TodoListView();
    this.store = new Store();
    this.formElem = formElem;
    this.inputElem = inputElem;
    this.containerElem = containerElem;
    this.todoItemCountElem = todoItemCountElem;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleGetData() {
    return this.store.getStore('todos');
  }

  handleSetData() {
    this.store.setStore('todos',this.todoListModel.items);
  }

  handleAdd(title, completed = false) {
    this.todoListModel.addTodo(new TodoItemModel({title, completed: completed}));
  }

  handleChange() {
      const todoItemCountElem = this.todoItemCountElem;
      const containerElem = this.containerElem;
      const todoItems = this.todoListModel.getTodoItems();
      const todoListElem = this.todoListView.createElement(todoItems,{
        onUpdateTodo: ({id, completed }) => {
          this.handleUpdate({id, completed});
        },
        onDeleteTodo: ({id}) => {
          this.handleDelete({id});
        }
      });
      this.handleSetData();
      render(todoListElem, containerElem);
      todoItemCountElem.textContent = `Todoアイテム数：${this.todoListModel.getTotalCount()}`;
  }

  handleSubmit(e){
      e.preventDefault();
      const inputElem = this.inputElem;
      this.handleAdd(inputElem.value);
      inputElem.value = '';
  }

  handleUpdate({id, completed}) {
    this.todoListModel.updateTodo({id, completed})
  }

  handleDelete({id}) {
    this.todoListModel.deleteTodo({id});
  }

  handleSavedData(items) {
    this.todoListModel.addSavedTodo(items);
  }

  mount() {
    this.formElem.addEventListener("submit", this.handleSubmit);
    this.todoListModel.onChange(this.handleChange);
    this.handleSavedData(this.handleGetData());
  }

  unmount(){
    this.formElem.removeEventListener("submit", this.handleSubmit);
    this.todoListModel.offChange(this.handleChange);
    console.log('unmounted');
  }
}