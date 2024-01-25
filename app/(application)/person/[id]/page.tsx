'use client'

import { Container } from '@/components/Container'
import { Person } from '@/types/Person'
import { personProfileUrl } from '@/utils/baseUrl'
import { fetchAndParse } from '@/utils/fetch'
import { requests } from '@/utils/requests'
import Image from 'next/image'
import { formatDate } from '@/utils/dates'
import { CarouselListRow } from '@/components/Carousel/CarouselListRow'

export default async function PersonDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const { results: personDetails } = await fetchAndParse<Person>(
    requests.fetchPersonDetails(params.id)
  )

  return (
    <Container>
      <div className="grid grid-cols-12 gap-x-8">
        <div className="col-span-3">
          <Image
            src={`${personProfileUrl}/${personDetails.profile_path}`}
            alt={personDetails?.name || 'Poster Image'}
            width={640}
            height={960}
            style={{ objectFit: 'cover' }}
            className="pointer-events-none"
          />
        </div>
        <div className="col-span-9">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
            {personDetails?.name}
          </h1>
          <p className="mt-2 text-neutral-400">
            <span className="font-bold">Born&nbsp;</span>
            {formatDate(personDetails?.birthday)} &bull;{' '}
            {personDetails?.place_of_birth}
          </p>

          <p className="mt-3 leading-relaxed">{personDetails.biography}</p>

          <CarouselListRow
            list={personDetails.combined_credits.cast}
            title="Credits"
          />
        </div>
      </div>
    </Container>
  )
}
