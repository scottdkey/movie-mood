import type { Handle } from '@sveltejs/kit';
import { theme, type ThemeVal } from './lib/stores/theme';

export let requestIp = ''
export let correlationId = crypto.randomUUID()

export const handle = (async ({ event, resolve }) => {

	try {
		requestIp = event.request.headers.get("x-forwarded-for") || event.getClientAddress();
  } catch (error) {
    console.error(error, 'Error reading IP');
  }

	event.locals.theme = event.cookies.get('theme') as ThemeVal;
	theme.set(event.locals.theme);
	return resolve(event);
}) satisfies Handle;
