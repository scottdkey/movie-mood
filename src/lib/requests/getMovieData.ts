import { selectedMovie } from "../stores/selectedMovie.store";

	export const getMovieData = async (movieDbId: string) => {
		const res = await fetch(`/api/movie/${movieDbId}`);
		const parsed = await res.json();
		console.log(parsed);
		selectedMovie.set(parsed);
	};