import { MovieAndTVShow } from '@/types/MovieAndTv'
import { baseURL } from '@/utils/baseUrl'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Rating } from '@/components/Rating'
import { CgPlayButtonO } from 'react-icons/cg'
import { ButtonOrLink } from './ui/ButtonOrLink'
import { Genres } from './Genres'

interface HomeBannerProps {
  movies: MovieAndTVShow[]
}

export const HomeBanner: React.FC<HomeBannerProps> = ({ movies }) => {
  const [movie, setMovie] = useState<MovieAndTVShow | null>(null)

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length)])
  }, [movies])

  return (
    <div className="relative flex flex-col py-16 lg:min-h-[75vh] lg:justify-end lg:pb-12 lg:pl-24">
      <Image
        src={`${baseURL}/${movie?.backdrop_path || movie?.poster_path}`}
        alt={movie?.title! || movie?.name! || 'movie picture'}
        fill
        style={{ objectFit: 'cover' }}
        className="absolute inset-0 z-0"
        priority
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="relative z-20 space-y-5">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
          {movie?.title}
        </h1>
        <div className="flex shrink-0 items-center justify-start gap-6">
          {movie?.vote_average && (
            <Rating value={movie?.vote_average} className="text-orange-400" />
          )}
          <Genres
            size="small"
            genres={movie?.genre_ids.map((genre) => genre as unknown as number)}
            type="movie"
          />
        </div>
        <p className="text-shadow-md line-clamp-5 max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
          {movie?.overview}
        </p>

        {movie?.title ? (
          <div className="flex gap-x-3">
            <ButtonOrLink
              as="link"
              href={`/${'title' in movie ? 'movies' : 'tv'}/${movie?.id}`}
              className="flex items-center gap-3 rounded-md bg-orange-400 px-2.5 py-2.5 text-sm font-semibold uppercase transition-colors hover:bg-white hover:text-orange-400"
            >
              Find out more
            </ButtonOrLink>
            <ButtonOrLink
              as="button"
              className="flex items-center gap-2 rounded-md bg-orange-400 px-2.5 py-2.5 text-sm font-semibold uppercase transition-colors hover:bg-white hover:text-orange-400"
            >
              <CgPlayButtonO className="h-6 w-6" />
              Watch now
            </ButtonOrLink>
          </div>
        ) : null}
      </div>
    </div>
  )
}
