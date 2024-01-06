import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	return {
		theme: event.data.theme || 'system'
	};
};
