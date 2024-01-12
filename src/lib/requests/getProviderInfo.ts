import { providerInfo } from "../stores/selectedMovie.store";

export const getProviderInfo = async (movieDbId: string) => {
  const res = await fetch(`/api/watchProvider?movieId=${movieDbId}`);
  const parsed = await res.json() as ProviderInfo;
  providerInfo.set(parsed);
};