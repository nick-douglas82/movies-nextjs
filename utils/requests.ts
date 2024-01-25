const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=gb_GB`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=gb_GB`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=gb_GB&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=gb_GB&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=gb_GB&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=gb_GB&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=gb_GB&with_genres=99`,
  fetchMovieGenres: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=gb_GB`,
  fetchTvGenres: `${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=gb_GB`,
  fetchMovieDetails: (id: string | string[]) =>
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits,images,recommendations,reviews,similar&language=gb_GB`,
  fetchTvDetails: (id: string | string[]) =>
    `${BASE_URL}/tv/${id}?api_key=${API_KEY}&append_to_response=videos,credits,images,recommendations,reviews,similar&language=gb_GB`,
  fetchMovieNowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=gb_GB`,
  fetchMoviePopular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=gb_GB`,
  fetchMovieUpcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=gb_GB`,
  fetchTvAiringToday: `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=gb_GB`,
  fetchTvOnTheAir: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=gb_GB`,
  fetchTvPopular: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=gb_GB`,
  fetchTvTopRated: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=gb_GB`,
  fetchPopularPeople: `${BASE_URL}/person/popular?api_key=${API_KEY}&language=gb_GB`,
}
