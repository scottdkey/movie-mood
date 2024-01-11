import { json, type RequestHandler } from '@sveltejs/kit';
import {
	getMovieById,
	getMovieWatchProvidersByMovieId,
} from '../../../../lib/server/moviedb.requests';
import { requestIp } from '../../../../hooks.server';

export const GET: RequestHandler = async ({ params  }) => {
	console.log(params);
	const slug = params['slug'];
	let movieId = '872585-oppenheimer';
	if (slug) {
		movieId = slug;
	}
	const movieInfo = await getMovieById(movieId);
	const providerInfo = await getMovieWatchProvidersByMovieId(movieId);
	console.log(requestIp, "requestIp")



	return json({
		movieInfo,
		providerInfo
	});
};
