import { MOVIE_DB_TOKEN } from '$env/static/private'

const movieDbApi = async <T>(url: string, method: 'GET', body?: any) => {
	try {
		const token = MOVIE_DB_TOKEN;
		const options: {
			method: 'GET';
			headers: {
				accept: string;
				Authorization: string;
			};
			body?: string;
		} = {
			method,
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		};
		if (body) {
			options.body = JSON.stringify(body);
		}
		const res = await fetch(url, options);
		return (await res.json()) as T;
	} catch (e) {
		console.error(e, 'unable to fetch from moviedb');
		throw e
	}
};

export const getMovieById = async (movieId: string) => {
	const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

	const res =  await movieDbApi<MovieInfo>(url, 'GET');

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
	const res = await movieDbApi<ProviderInfo>(url, 'GET');

	const parsedObject:ProviderInfo = {
		...res,
		results: res.results
	}

	return parsedObject
};

export const movieDbImagePath = (filePath: string) => `https://image.tmdb.org/t/p/w500/${filePath}`;
