import { error, json, type RequestHandler } from '@sveltejs/kit';
import {
	getMovieWatchProvidersByMovieId,
	movieDbImagePath,
} from '../../../lib/server/moviedb.requests';
import { requestIp } from '../../../hooks.server';
import { getCountryCodeByIp } from '../../../lib/server/geoLocation.requests';

export const GET: RequestHandler = async ({ url }) => {
	let countryCode = url.searchParams.get('countryCode');
	const movieId = url.searchParams.get('movieId')

	const countryCodeRequest = await getCountryCodeByIp(requestIp)
	const ipCountryCode = requestIp === "::1" ? 'US' : countryCodeRequest.country;

	if (countryCode === undefined || countryCode === null) {
		countryCode = ipCountryCode;
	}
	if (movieId && countryCode) {
		const providerInfo = await getMovieWatchProvidersByMovieId(movieId);
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
		return json(watchInfo);
	}
	if (movieId === undefined) {
		error(424, { message: 'no movieId passed' })
	}
	error(500, 'something went wrong')
};
