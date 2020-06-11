const baseURL = 'https://api.tvmaze.com';

type ListOfShows = {show: {}}[];
type ListFromSearch = {}[];
type Details = {name: string};

function normalize(rawData: Array<{show: object}>): Array<{}> {
  return rawData.map((entry: {show: object }) => entry.show);
}

const api = {
  /**
   * Used when we fetch entries to display on front page
   * @param page or pagination
   * @returns a promise of data
   */
  async fetchBatch(page: number): Promise<ListOfShows> {
    const endpoint = `/shows?page=${page}`;
    // return this.getData(endpoint);
    const fetchPromise = fetch(baseURL + endpoint);
    return fetchPromise
      .then((response) => response.json())
      .then((rawData) => rawData);
  },
  /**
   * Used when we fetch search results
   * @param query phrase seek
   * @returns a promise of data
   */
  async fetchSearched(query: string): Promise<ListFromSearch> {
    const endpoint = `/search/shows?q=${query}`;
    const fetchPromise = fetch(baseURL + endpoint);
    return fetchPromise
      .then((response) => response.json())
      .then((rawData) => normalize(rawData));
    //  this.normalize(resolved);
  },
  // return rawData.then((data) => this.normalize(data as ListOfShows));
  /**
   * Used when we fetch details.
   * Crew and cast info is embedded.
   * @param id used to fetch an entry
   * @returns a promise of data
   */
  async fetchDetails(id: string): Promise<Details> {
    const endpoint = `/shows/${id}?embed[]=crew&embed[]=cast`;
    const fetchPromise = fetch(baseURL + endpoint);
    return fetchPromise
      .then((response) => response.json())
      .then((rawData) => rawData);
    // return this.getData(endpoint);
  },
  // /**
  //  * Data fetching utility
  //  * @param endpoint to hit
  //  * @returns a promise of data
  //  */
  // async getData(endpoint: string): Promise<ListOfShows | ListFromSearch | Details> {
  //   const fetchPromise = fetch(baseURL + endpoint);
  //   return fetchPromise
  //     .then((response) => response.json())
  //     .then((rawData) => rawData);
  // },
  /**
   * Normalizing utility - used to strip entries of
   * their wrapping objects
   * @param rawData
   */
};

export default api;
