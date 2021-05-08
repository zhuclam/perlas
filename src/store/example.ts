import { writable } from 'svelte/store'

function createCount() {
  const { subscribe, set, update } = writable(0)

  return {
    subscribe,
    increment: () => {},
    decrement: () => {},
    reset: () => {},
  }
}

const count = createCount()

export { count }
