import '../css/style.scss';
import { App } from './App.js';

const formElem = document.querySelector('#js-form');
const inputElem = document.querySelector('#js-form-input');
const containerElem = document.querySelector('#js-todo-list');
const todoItemCountElem = document.querySelector('#js-todo-count');

const app = new App({ formElem, inputElem, containerElem, todoItemCountElem });
window.addEventListener('load', () => {
  app.mount();
});

window.addEventListener('unload', () => {
  app.unmount();
});

// localstorageに保存できるよにする
// 入力内容を編集できるようにする
// フィルターソート