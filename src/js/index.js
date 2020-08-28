import '../css/style.scss';
import { App } from './App.js';

const formElem = document.querySelector('#js-form');
const inputElem = document.querySelector('#js-form-input');
const containerElem = document.querySelector('#js-todo-list');
const todoItemCountElem = document.querySelector('#js-todo-count');
const todoDelAll = document.querySelector('#js-delete-all');


const app = new App({ formElem, inputElem, containerElem, todoItemCountElem, todoDelAll });
window.addEventListener('load', () => {
  app.mount();
});

window.addEventListener('unload', () => {
  app.unmount();
});


// 入力内容を編集できるようにする
// change event 発火時（新しいtodo作成時に）にtodoItemTileを更新する
// const todoItemTitle = document.querySelectorAll('.title');
// console.log(todoItemTitle);

// todoItemTitle.addEventListener('click', e => console.log(`click ${e}`));

// フィルターソート

