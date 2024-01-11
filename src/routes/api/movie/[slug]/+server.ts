import { json, type RequestHandler } from '@sveltejs/kit';
import {
	getMovieById,
	getMovieWatchProvidersByMovieId,
	movieDbImagePath,
} from '../../../../lib/server/moviedb.requests';
import { requestIp } from '../../../../hooks.server';
import { getCountryCodeByIp } from '../../../../lib/server/geoLocation.requests';

export const GET: RequestHandler = async ({ params  }) => {
	console.log(params);
	const slug = params['slug'];
	let movieId = '872585-oppenheimer';
	if (slug) {
		movieId = slug;
	}
	const movieInfo = await getMovieById(movieId);
	const providerInfo = await getMovieWatchProvidersByMovieId(movieId);
	const countryCodeRequest = await getCountryCodeByIp(requestIp)
	const countryCode = requestIp === "::1" ? 'US' : countryCodeRequest.country
	const watchInfo: {
		buy: Provider[]
		rent: Provider[]
		link: string
	} = providerInfo.results[countryCode]

	watchInfo.buy = watchInfo.buy.map((value) => {
		return {
			...value,
			logo_path: movieDbImagePath(value.logo_path)
		}

	})
	watchInfo.rent = watchInfo.rent.map((value) => {
		return {
			...value,
			logo_path: movieDbImagePath(value.logo_path)
		}

	})

	console.log(watchInfo)




	return json({
		movieInfo,
		providerInfo
	});
};
