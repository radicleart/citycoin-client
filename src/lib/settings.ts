import { writable, get } from 'svelte/store';

function createStore() {

  // destructure the store on creation to have 'direct access' to methods
  const { subscribe, update, set } = writable();

  return {
    subscribe,

    changeSetting(key: string, value: any) {
      if (!key) return;
      let storeValue: any = get(this);
      storeValue = value;
      update((_) => storeValue);
    }
  };
}

export default createStore();
