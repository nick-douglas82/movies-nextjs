import { CarouselListRow } from '@/components/Carousel/CarouselListRow'
import { Container } from '@/components/Container'
import { MovieAndTVShow } from '@/types/MovieAndTv'
import { fetchAndParse } from '@/utils/fetch'
import { requests } from '@/utils/requests'

export default async function Movies() {
  let [nowPlaying, popular, topRated, upcoming] = await Promise.all([
    fetchAndParse<{ results: MovieAndTVShow[] }>(requests.fetchMovieNowPlaying),
    fetchAndParse<{ results: MovieAndTVShow[] }>(requests.fetchMoviePopular),
    fetchAndParse<{ results: MovieAndTVShow[] }>(requests.fetchTopRated),
    fetchAndParse<{ results: MovieAndTVShow[] }>(requests.fetchMovieUpcoming),
  ])

  return (
    <Container>
      <CarouselListRow list={nowPlaying.results.results} title="Now Playing" />
      <CarouselListRow list={popular.results.results} title="Popular" />
      <CarouselListRow list={topRated.results.results} title="Top Rated" />
      <CarouselListRow list={upcoming.results.results} title="Upcoming" />
    </Container>
  )
}
