import { Genre, GenreId } from './Genre'

export interface MovieAndTVShow {
  adult: boolean
  backdrop_path: string
  genre_ids: GenreId[]
  id: number
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title?: string
  name?: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IReviews {
  page: number
  results: {
    content: string
    created_at: string
    id: string
    updated_at: string
    url: string
    author: string
    author_details: {
      avatar_path: string | null
      name: string
      rating: number
      username: string
    }
  }[]
  total_pages: number
  total_results: number
}

export interface MovieAndTVShowDetails {
  adult: boolean
  backdrop_path: string
  budget: number
  credits: {
    cast: []
    crew: []
  }
  first_air_date: string
  genres: Genre[]
  homepage: string
  id: number
  images: { backdrops: []; logos: []; posters: [] }
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  recommendations: {
    page: number
    results: []
    total_pages: number
    total_results: number
  }
  release_date: string
  reviews: IReviews
  runtime: number
  similar: {
    results: MovieAndTVShow[]
  }
  tagline: string
  title?: string
  name?: string
  video: boolean
  videos: {
    results: [
      {
        id: string
        iso_639_1: string
        iso_3166_1: string
        key: string
        name: string
        official: boolean
        published_at: string
        site: string
        size: number
        type: string
      },
    ]
  }
  vote_average: number
  vote_count: number
}
