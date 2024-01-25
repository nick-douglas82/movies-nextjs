import { CarouselListRow } from '@/components/Carousel/CarouselListRow'
import { PageBanner } from '@/components/PageBanner'
import { Reviews } from '@/components/Reviews'
import { MovieAndTVShowDetails } from '@/types/MovieAndTv'
import { fetchAndParse } from '@/utils/fetch'
import { requests } from '@/utils/requests'
import { Container } from '@/components/Container'

export default async function TvDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const { results: tvShow } = await fetchAndParse<MovieAndTVShowDetails>(
    requests.fetchTvDetails(params.id)
  )
  return (
    <>
      {tvShow ? (
        <>
          <PageBanner details={tvShow} type="tv" />
          <Container>
            <Reviews reviews={tvShow.reviews} />
            <CarouselListRow
              list={tvShow.recommendations.results}
              title="You May Also Like"
            />
          </Container>
        </>
      ) : null}
    </>
  )
}
