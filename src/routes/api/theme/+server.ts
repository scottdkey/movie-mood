import type { RequestEvent } from './$types';

export async function POST({ url, cookies, request }: RequestEvent) {
	const data = (await request.json()) as {
		theme?: string;
	};

	const theme = data.theme;

	if (theme) {
		console.log(theme);
		cookies.set('colortheme', theme, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365
		});
	}
	return new Response(JSON.stringify({theme}));
}
