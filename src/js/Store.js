export class Store{
  setStore(key, items) {
    try {
      localStorage.setItem(key, JSON.stringify(items));
    } catch (e) {
      throw new Error('localstorage is not available');
    }
  }

  getStore(key) {
    try {
      if (!localStorage.getItem(key)) {
        return;
      }
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      throw new Error('localstorage is not available');
    }
  }
}