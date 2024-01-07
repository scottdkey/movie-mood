import { json, type RequestHandler } from '@sveltejs/kit';
import { z } from 'zod';

export const POST: RequestHandler = async ({ cookies, url, request }) => {
	const body = await request.json();
	const themeBody = z
		.object({
			theme: z.string()
		})
		.parse(body);

	if (themeBody.theme) {
		cookies.set('theme', themeBody.theme, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365
		});
	}

	return json({
		theme: body.theme
	});
};
