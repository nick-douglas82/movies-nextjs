'use client'

import { useEffect, useState } from 'react'
import { requests } from '@/utils/requests'
import { Loader } from '@/components/Loader'
import { CarouselListRow } from '@/components/Carousel/CarouselListRow'
import type { MovieAndTVShow } from '@/types/MovieAndTv'
import { HomeBanner } from '@/components/HomeBanner'

interface MovieList {
  netflixOriginals: MovieAndTVShow[]
  trendingNow: MovieAndTVShow[]
  topRated: MovieAndTVShow[]
  actionMovies: MovieAndTVShow[]
  comedyMovies: MovieAndTVShow[]
  horrorMovies: MovieAndTVShow[]
  romanceMovies: MovieAndTVShow[]
  documentaries: MovieAndTVShow[]
}

const fetchAndParse = async (
  url: string
): Promise<{ results: MovieAndTVShow[] }> => {
  const response = await fetch(url)
  return response.json()
}

const movieRequests = [
  requests.fetchNetflixOriginals,
  requests.fetchTrending,
  requests.fetchTopRated,
  requests.fetchActionMovies,
  requests.fetchComedyMovies,
  requests.fetchHorrorMovies,
  requests.fetchRomanceMovies,
  requests.fetchDocumentaries,
]

export default function Home() {
  const [movie, setMovie] = useState<MovieList>({
    netflixOriginals: [],
    trendingNow: [],
    topRated: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
    documentaries: [],
  })

  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      setIsLoading(true)

      const [
        netflixOriginals,
        trendingNow,
        topRated,
        actionMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaries,
      ] = await Promise.all(movieRequests.map(fetchAndParse))

      setMovie((prev) => ({
        ...prev,
        netflixOriginals: netflixOriginals.results,
        trendingNow: trendingNow.results,
        topRated: topRated.results,
        actionMovies: actionMovies.results,
        comedyMovies: comedyMovies.results,
        horrorMovies: horrorMovies.results,
        romanceMovies: romanceMovies.results,
        documentaries: documentaries.results,
      }))
    } catch (error: any) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Loader isLoading={isLoading} />
      <div className="mb-20">
        <HomeBanner movies={movie.netflixOriginals} />
        {/* <CarouselListRow
          list={movie.trendingNow}
          title="All Trending Now"
          isHomepage
        />
        <CarouselListRow
          list={movie.topRated}
          title="Top Rated Movies"
          isHomepage
        />
        <CarouselListRow
          list={movie.actionMovies}
          title="Action Movies"
          isHomepage
        />
        <CarouselListRow
          list={movie.comedyMovies}
          title="Comedy Movies"
          isHomepage
        />
        <CarouselListRow
          list={movie.horrorMovies}
          title="Horror Movies"
          isHomepage
        />
        <CarouselListRow
          list={movie.romanceMovies}
          title="Romance Movies"
          isHomepage
        />
        <CarouselListRow
          list={movie.documentaries}
          title="Documentaries"
          isHomepage
        /> */}
      </div>
    </>
  )
}
