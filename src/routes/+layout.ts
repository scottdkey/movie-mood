import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (event) => {
	return {
		theme: event.data.theme || 'system'
	};
};
