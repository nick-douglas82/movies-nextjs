import { MovieAndTVShow } from './MovieAndTv'

export interface Person {
  adult: boolean
  gender: number
  id: number
  known_for: Array<MovieAndTVShow>
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string | null
}
