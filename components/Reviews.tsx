import { Fragment } from 'react'
import { IReviews } from '@/types/MovieAndTv'
import { baseURL } from '@/utils/baseUrl'
import { formatDate } from '@/utils/dates'
import { Divider } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { SectionTitle } from '@/components/SectionTitle'

interface ReviewsProps {
  reviews: IReviews
}

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const { results } = reviews

  return (
    <>
      {results.length > 0 && (
        <div className="pb-12">
          <SectionTitle title="Reviews" />
          <div>
            <div className="h-[300px] w-full gap-y-20 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-orange-400">
              {results.map((review) => (
                <Fragment key={`${review.id}_${review.author}`}>
                  <div className="h-auto w-full rounded-md bg-neutral-800 px-12 py-4">
                    <div className="flex gap-8">
                      <Avatar
                        alt={
                          review.author_details.name ||
                          review.author ||
                          'Avatar'
                        }
                        src={`${baseURL}${review.author_details.avatar_path}`}
                        sx={{ width: 56, height: 56 }}
                      />
                      <div>
                        <p className="text-xl font-semibold">
                          A review by {review.author}
                        </p>
                        <p className="text-sm text-neutral-400">
                          Written by {review.author} on{' '}
                          {formatDate(review.created_at)}
                        </p>
                        <div className="w-[80%] py-3">
                          <p className="leading-relaxed">{review.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {results.length > 1 ? <Divider className="py-1" /> : null}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
