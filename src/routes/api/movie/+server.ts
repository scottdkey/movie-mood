import { error, json, type RequestHandler } from '@sveltejs/kit';
import {
	getMovieById
} from '$lib/server/moviedb.requests';

export const GET: RequestHandler = async ({ url }) => {
	const currentMood = url.searchParams.get('currentMood')
	const desiredMood = url.searchParams.get('desiredMood')

	if (currentMood === null) {
		error(424, 'must pass current mood')
	}
	if (desiredMood == null) {
		error(424, 'must pass desired mood')
	}
	//allow this here for testing purposes
	let movieId = '872585-oppenheimer';
	if (currentMood && desiredMood) {
		movieId = '872585-oppenheimer';
	}
	const movieInfo = await getMovieById(movieId);

	return json(movieInfo);
};
