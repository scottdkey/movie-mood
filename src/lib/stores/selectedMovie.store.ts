import { writable } from "svelte/store";


export const movieInfo = writable<MovieInfo | null>(null)
export const providerInfo = writable<ProviderInfo | null>(null)