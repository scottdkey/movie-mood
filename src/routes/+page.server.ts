import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { ThemeVal } from '../lib/stores/theme';

export const actions: Actions = {
	setTheme: async ({ url, cookies, request }) => {
		const formData = await request.formData();
		let theme: ThemeVal = 'dark';
		const value = formData.get('theme');
		if (value) {
			theme = value?.valueOf() as ThemeVal;
		}

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




