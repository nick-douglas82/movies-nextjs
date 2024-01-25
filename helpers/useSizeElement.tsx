import { useState, useRef, useEffect } from 'react'

export const useSizeElement = () => {
  const elementRef = useRef<HTMLElement | null>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(elementRef?.current?.clientWidth ?? 0)
  }, [elementRef.current])

  return { width, elementRef }
}
