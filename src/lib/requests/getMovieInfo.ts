import { movieInfo } from "../stores/selectedMovie.store";


export const getMovieInfo = async (currentMood: string, desiredMood: string) => {
	const res = await fetch(`/api/movie?currentMood=${currentMood}&desiredMood=${desiredMood}`);
	const parsed = await res.json() as MovieInfo;
	movieInfo.set(parsed);
};