const baseURL = 'http://api.tvmaze.com';

/**
 * Get data from API, normalize if needed
 * @param query is either a phrase searched or pagination
 * @param isSearched determines the endpoint
 * @returns a promise of data
 */
async function getShows(query: number | string, isSearched = false): Promise<Response> {
  const endpoint = isSearched ? `/search/shows?q=${query}` : `/shows?page=${query}`;
  const fetchPromise = fetch(baseURL + endpoint);
  return fetchPromise
    .then((response) => response.json())
    .then((rawData) => {
      const normalizedData = isSearched
        ? rawData.map((entry: {show: object }) => entry.show)
        : rawData;
      return normalizedData;
    });
}

export default getShows;
