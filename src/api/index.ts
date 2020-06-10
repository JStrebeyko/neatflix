const baseURL = 'http://api.tvmaze.com';

const api = {
  /**
   * Used when we fetch entries to display on front page
   * @param page or pagination
   * @returns a promise of data
   */
  async fetchBatch(page: number): Promise<Response> {
    const endpoint = `/shows?page=${page}`;
    return this.getData(endpoint);
  },
  /**
   * Used when we fetch search results
   * @param query phrase seek
   * @returns a promise of data
   */
  async fetchSearched(query: string): Promise<Response> {
    const endpoint = `/search/shows?q=${query}`;
    const rawData = this.getData(endpoint);
    return rawData.then((data) => this.normalize(data));
  },
  /**
   * Used when we fetch details.
   * Crew and cast info is embedded.
   * @param id used to fetch an entry
   * @returns a promise of data
   */
  async fetchDetails(id: string): Promise<Response> {
    const endpoint = `/shows/${id}?embed[]=crew&embed[]=cast`;
    return this.getData(endpoint);
  },
  /**
   * Data fetching utility
   * @param endpoint to hit
   * @returns a promise of data
   */
  async getData(endpoint: string): Promise<Response> {
    const fetchPromise = fetch(baseURL + endpoint);
    return fetchPromise
      .then((response) => response.json())
      .then((rawData) => rawData);
  },
  /**
   * Normalizing utility - used to strip entries of
   * their wrapping objects
   * @param rawData
   */
  normalize(rawData: Response): Promise<Response> {
    return rawData.map((entry: {show: object }) => entry.show);
  },
};

export default api;
