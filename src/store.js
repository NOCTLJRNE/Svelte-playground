import { writable, readable, derived } from "svelte/store";
export const count = writable(0);
export const words = writable("world");
export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);
  return function stop() {
    clearInterval(interval);
  };
});
const start = new Date();
export const elapsed = derived(time, $time =>
  Math.round(($time - start) / 1000)
);
export const greetings = derived(words, $words => `Hello ${$words} !`);
const { subscribe, set, update } = writable(0);
function createCounter() {
  return {
    subscribe,
    increment: () => {
      update(n => n + 1);
    },
    decrement: () => {
      update(n => n - 1);
    },
    reset: () => {
      set(0);
    }
  };
}
// export const count2 = {
//   subscribe,
//   increment: () => {
//     update(n => n + 1);
//   },
//   decrement: () => {
//     update(n => n - 1);
//   },
//   reset: () => {
//     set(0);
//   }
// };
export const count2 = createCounter();
