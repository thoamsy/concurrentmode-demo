const fast = 200;
const slow = 2000;
export let delayMs = fast;

export const switchDelay = () => (delayMs = delayMs === fast ? slow : fast);
export const delay = (ms = delayMs) => {
  return new Promise(r => setTimeout(r, ms));
};
