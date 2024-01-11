import { json, type RequestHandler } from '@sveltejs/kit';
import {
	getMovieById,
	getMovieWatchProvidersByMovieId
} from '../../../../lib/server/moviedb.requests';

export const GET: RequestHandler = async ({ params }) => {
	console.log(params);
	const slug = params['slug'];
	let movieId = '872585-oppenheimer';
	if (slug) {
		movieId = slug;
	}
	const data = await getMovieById(movieId);
	const providerInfo = await getMovieWatchProvidersByMovieId(movieId);
	return json({
		movieInfo: data,
		providerInfo
	});
};
