import { requests } from '@/utils/requests'
import { PageBanner } from '@/components/PageBanner'
import { Reviews } from '@/components/Reviews'
import { CarouselListRow } from '@/components/Carousel/CarouselListRow'
import { fetchAndParse } from '@/utils/fetch'
import { MovieAndTVShowDetails } from '@/types/MovieAndTv'
import { Container } from '@/components/Container'

export default async function MovieDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const { results: movieDetails } = await fetchAndParse<MovieAndTVShowDetails>(
    requests.fetchMovieDetails(params.id)
  )

  return (
    <>
      {movieDetails ? (
        <>
          <PageBanner details={movieDetails} type="movie" />
          <Container>
            <Reviews reviews={movieDetails.reviews} />
            <CarouselListRow
              list={movieDetails.similar.results}
              title="You May Also Like"
            />
          </Container>
        </>
      ) : null}
    </>
  )
}
