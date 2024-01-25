'use client'

import Link from 'next/link'
import { useActivePath } from '@/helpers/useActivePath'
import { cn } from '@/utils/cn'

interface NavItemProps {
  href: string
  children: React.ReactNode
  condition?: boolean
}

export const NavItem: React.FC<NavItemProps> = ({
  href,
  children,
  condition = true,
}) => {
  const checkActivePath = useActivePath()

  return (
    <>
      {condition ? (
        <Link href={href}>
          <span
            className={cn(
              'font-medium text-white transition-all hover:text-orange-400',
              checkActivePath(href) && 'text-orange-400'
            )}
          >
            {children}
          </span>
        </Link>
      ) : null}
    </>
  )
}
