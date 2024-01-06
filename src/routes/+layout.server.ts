import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	return {
		theme: event.locals.theme || 'system'
	};
};
