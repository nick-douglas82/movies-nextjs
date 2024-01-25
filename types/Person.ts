import { MovieAndTVShow } from './MovieAndTv'

export interface Person {
  adult: boolean
  birthday: string
  biography: string
  combined_credits: {
    cast: Array<MovieAndTVShow>
    crew: Array<MovieAndTVShow>
  }
  gender: number
  id: number
  images: {
    profiles: Array<{
      aspect_ratio: number
      file_path: string
      height: number
      iso_639_1: string | null
      vote_average: number
      vote_count: number
      width: number
    }>
  }
  known_for_department: string
  known_for: Array<MovieAndTVShow>
  name: string
  original_name: string
  place_of_birth: string
  popularity: number
  profile_path: string | null
}
