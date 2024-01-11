import { MOVIE_DB_TOKEN } from '$env/static/private'
import { fetchRequest } from './fetchRequest';


export const getMovieById = async (movieId: string) => {
	const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

	const res =  await fetchRequest<MovieInfo>(url, 'GET', {
		apiToken: MOVIE_DB_TOKEN
	});

	const parsedMovieInfo: MovieInfo = {
		...res,
		backdrop_path: movieDbImagePath(res.backdrop_path),
		poster_path: movieDbImagePath(res.poster_path),
		production_companies: res.production_companies.map((company) => {
		return {
			...company,
			logo_path: movieDbImagePath(company.logo_path)
		}
		})

	}
	return parsedMovieInfo
};

export const getMovieWatchProvidersByMovieId = async (movieId: string) => {
	const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`;
	const res = await fetchRequest<ProviderInfo>(url, 'GET', {
		apiToken: MOVIE_DB_TOKEN
	});

	const parsedObject:ProviderInfo = {
		...res,
		results: res.results
	}

	return parsedObject
};

export const movieDbImagePath = (filePath: string) => `https://image.tmdb.org/t/p/w500${filePath}`;
