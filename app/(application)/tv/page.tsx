import { CarouselListRow } from '@/components/Carousel/CarouselListRow'
import { Container } from '@/components/Container'
import { MovieAndTVShow } from '@/types/MovieAndTv'
import { fetchAndParse } from '@/utils/fetch'
import { requests } from '@/utils/requests'

export default async function TV() {
  let [airingToday, onTheAir, popular, topRated] = await Promise.all([
    fetchAndParse<{ results: MovieAndTVShow[] }>(requests.fetchTvAiringToday),
    fetchAndParse<{ results: MovieAndTVShow[] }>(requests.fetchTvOnTheAir),
    fetchAndParse<{ results: MovieAndTVShow[] }>(requests.fetchTvPopular),
    fetchAndParse<{ results: MovieAndTVShow[] }>(requests.fetchTvTopRated),
  ])

  return (
    <Container>
      <CarouselListRow
        list={airingToday.results.results}
        title="Airing Today"
      />
      <CarouselListRow list={onTheAir.results.results} title="On the Air" />
      <CarouselListRow list={popular.results.results} title="Popular" />
      <CarouselListRow list={topRated.results.results} title="Top Rated" />
    </Container>
  )
}
