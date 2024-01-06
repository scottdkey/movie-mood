import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	return {
		theme: event.locals.theme || 'system'
	};
};

export const actions: Actions = {
	setTheme: async ({ url, cookies, request }) => {
		const formData = await request.formData();
		const theme = formData.get('theme')?.valueOf() as string;

		const redirectTo = url.searchParams.get('redirectTo');

		if (theme) {
			cookies.set('theme', theme, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}

		throw redirect(303, redirectTo ?? '/');
	}
};
