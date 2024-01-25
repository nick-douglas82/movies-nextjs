import Image from 'next/image'
import { formatDate } from '@/utils/dates'
import { Rating } from '@/components/Rating'
import { MovieAndTVShow } from '@/types/MovieAndTv'
import Link from 'next/link'

interface CarouselItemProps {
  movie: MovieAndTVShow
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ movie }) => {
  return (
    <div className="relative h-[266px] shrink-0">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        fill={true}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="rounded-sm object-cover md:rounded"
        alt={movie?.title || movie?.name || 'movie poster'}
        loading="lazy"
      />
      <Link
        href={`/${'title' in movie ? 'movies' : 'tv'}/${movie.id}`}
        className="group absolute inset-0"
      >
        <span className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-30" />
        <div className="inset-0 flex h-full  flex-col justify-end py-3 text-orange-400 ">
          <div className="-translate-y-10 px-3 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <Rating value={movie.vote_average} />
            <p className="z-50 text-xs text-white">
              {formatDate(movie.release_date)}
            </p>
          </div>
          <div className="relative z-50 truncate py-3 text-sm font-medium text-white">
            <span className="absolute inset-0 z-10 bg-black opacity-30 transition-opacity group-hover:opacity-0" />
            <div className="relative z-10 px-3">
              {movie?.title || movie?.name}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
