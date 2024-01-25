'use client'

import { useEffect } from 'react'

export const Test = () => {
  useEffect(() => {
    console.log('test')
  }, [])

  return <div>TEST!!</div>
}
