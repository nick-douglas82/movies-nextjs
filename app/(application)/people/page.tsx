import Image from 'next/image'
import Link from 'next/link'
import { fetchAndParse } from '@/utils/fetch'
import { requests } from '@/utils/requests'
import { Container } from '@/components/Container'
import type { Person } from '@/types/Person'
import { personProfileUrl } from '@/utils/baseUrl'

export default async function People() {
  const { results: people } = await fetchAndParse<{ results: Person[] }>(
    requests.fetchPopularPeople
  )

  return (
    <>
      <Container>
        <div className="grid grid-cols-6 gap-10">
          {people.results.map((person) => (
            <Link href={`/person/${person.id}`}>
              <div className="relative flex h-[300px] w-full items-end py-2">
                <Image
                  src={`${personProfileUrl}${person.profile_path}`}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-sm object-cover md:rounded"
                  alt={person?.name || 'person picture'}
                  loading="lazy"
                />
                <div className="relative z-10 w-full bg-black/30 px-3 py-2">
                  {person?.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  )
}
