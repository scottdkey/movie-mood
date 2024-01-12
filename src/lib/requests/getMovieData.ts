import { movieInfo } from "../stores/selectedMovie.store";


export const getMovieData = async (movieDbId: string) => {
	const res = await fetch(`/api/movie/${movieDbId}`);
	const parsed = await res.json() as MovieInfo;
	movieInfo.set(parsed);
};