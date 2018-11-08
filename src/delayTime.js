const fast = 200;
const slow = 2000;
export let delayMs = fast;

export const switchDelay = () => (delayMs === fast ? slow : fast);
export const delay = () => new Promise(r => setTimeout(r, delayMs));
