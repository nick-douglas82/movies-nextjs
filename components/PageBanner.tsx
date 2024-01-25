import Image from 'next/image'
import { MovieAndTVShowDetails } from '@/types/MovieAndTv'
import { baseURL } from '@/utils/baseUrl'
import { Rating } from '@/components/Rating'
import { Genres } from './Genres'
import { ButtonOrLink } from '@/components/ui/ButtonOrLink'
import { CgPlayButtonO } from 'react-icons/cg'
import { CastSlider } from '@/components/CastSlider'
import { formatDateToYear } from '@/utils/dates'

interface PageBannerProps {
  details: MovieAndTVShowDetails
  type: 'movie' | 'tv'
}

export const PageBanner: React.FC<PageBannerProps> = ({ details, type }) => {
  const movieGenres = (): number[] => {
    return details?.genres.map((genre) => genre.id)
  }

  return (
    <div className="h-content relative w-full pt-64">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-t from-[#141414] to-transparent" />
      <Image
        src={`${baseURL}/${details?.backdrop_path || details?.poster_path}`}
        alt={details?.title || 'Poster Image'}
        fill
        style={{ objectFit: 'cover' }}
        className="pointer-events-none absolute inset-0 z-0"
        priority
      />

      <div className="relative z-10 mb-8 grid grid-cols-12 gap-x-10 px-24">
        <div className="relative col-span-4">
          <Image
            src={`${baseURL}/${details?.poster_path}`}
            alt={details?.title || 'Poster Image'}
            width={640}
            height={960}
            style={{ objectFit: 'cover' }}
            className="pointer-events-none"
          />
        </div>
        <div className="col-span-8">
          <div className="mb-16">
            <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
              {details?.title || details?.name}
            </h1>
            <p className="">
              {formatDateToYear(
                details?.release_date || details?.first_air_date
              )}
            </p>
          </div>

          <div className="flex shrink-0 items-center justify-start gap-2">
            {details?.vote_average && (
              <Rating
                value={details?.vote_average}
                className="mr-4 text-orange-400"
              />
            )}
            <Genres genres={movieGenres()} size="large" type={type} />
          </div>

          <p className="text-shadow-md mt-12 line-clamp-5 text-xs md:text-lg">
            {details?.overview}
          </p>

          <div className="mt-16">
            <ButtonOrLink
              as="button"
              className="flex items-center gap-2 rounded-md bg-orange-400 px-3.5 py-3.5 text-lg font-semibold uppercase transition-colors hover:bg-white hover:text-orange-400"
            >
              <CgPlayButtonO className="h-6 w-6" />
              Watch now
            </ButtonOrLink>
          </div>

          <CastSlider cast={details.credits.cast} />
        </div>
      </div>
    </div>
  )
}
