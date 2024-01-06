import { writable } from 'svelte/store';

export type ThemeVal = 'light' | 'dark' | 'system';
const theme = writable<ThemeVal>('system');
theme.set('system');

export { theme };
