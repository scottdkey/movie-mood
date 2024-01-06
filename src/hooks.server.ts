import type { Handle } from '@sveltejs/kit';
import { theme, type ThemeVal } from './lib/stores/theme';

export const handle = (async ({ event, resolve }) => {
	// let theme: string | null = null;

	const newTheme = event.url.searchParams.get('theme');
	const cookieTheme = event.cookies.get('colortheme');


	if (theme) {
		return await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
		});
	}

	return await resolve(event);
}) satisfies Handle;
