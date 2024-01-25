import dayjs from 'dayjs'

export const formatDate = (date: string) => {
  return dayjs(date).format('DD/MM/YYYY')
}

export const formatDateToYear = (date: string) => {
  return dayjs(date).format('YYYY')
}
