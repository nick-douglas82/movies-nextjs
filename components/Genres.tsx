import { Genre } from '@/types/Genre'
import { cn } from '@/utils/cn'
import { fetchAndParse } from '@/utils/fetch'
import { requests } from '@/utils/requests'

interface GenresProps {
  genres: number[] | undefined
  size: 'small' | 'large'
  type: 'movie' | 'tv'
}

export const Genres: React.FC<GenresProps> = async ({ genres, size, type }) => {
  const { results: allGenres } = await fetchAndParse<{ genres: Genre[] }>(
    type === 'tv' ? requests.fetchTvGenres : requests.fetchMovieGenres
  )

  const getGenreName = (genreId: number): string => {
    const genre = allGenres.genres.find((g) => g.id === genreId)
    return genre ? genre.name : ''
  }

  return (
    <div className="flex shrink-0 items-center justify-start gap-2">
      {genres?.length
        ? genres.map((genres) => (
            <p
              key={genres}
              className={cn(
                `rounded-full bg-orange-400 px-3 py-1.5 text-center transition-colors`,
                size === 'small' ? 'text-xs' : 'text-base'
              )}
            >
              {getGenreName(genres)}
            </p>
          ))
        : null}
    </div>
  )
}
