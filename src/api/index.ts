const baseURL = 'http://api.tvmaze.com';

/**
 * Showing tiles
 */
export async function getShows(num: number): Promise<Response> {
  const endpoint = `/shows?page=${num}`;
  const fetchPromise = fetch(baseURL + endpoint);
  return fetchPromise
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

/**
 * Searching
 */
export function search(phrase: string): void {
  console.log('duh', phrase);
}
