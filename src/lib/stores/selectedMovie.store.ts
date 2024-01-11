import { writable } from "svelte/store";

	export const selectedMovie = writable<MovieDB | null>(null);