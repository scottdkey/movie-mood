import type { Handle } from '@sveltejs/kit';
import { theme, type ThemeVal } from './lib/stores/theme';

export const handle = (async ({ event, resolve }) => {
	event.locals.theme = event.cookies.get('theme') as ThemeVal;
	theme.set(event.locals.theme);
	return resolve(event);
}) satisfies Handle;
