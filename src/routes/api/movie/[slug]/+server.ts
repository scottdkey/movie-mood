import { error, json, type RequestHandler } from '@sveltejs/kit';
import {
	getMovieById
} from '$lib/server/moviedb.requests';

export const GET: RequestHandler = async ({ params }) => {
	const slug = params['slug'];
	if (slug === 'undefined') {
		error(424, 'must pass movie id')
	}
	//allow this here for testing purposes
	let movieId = '872585-oppenheimer';
	if (slug) {
		movieId = slug;
	}
	const movieInfo = await getMovieById(movieId);

	return json(movieInfo);
};
