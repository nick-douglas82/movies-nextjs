import Link from 'next/link'
import { UserNav } from '@/components/Navigation/UserNav'
import { SiteNav } from '@/components/Navigation/SiteNav'
import { SiteLogo } from '@/components/SiteLogo'

export const SiteHeader = () => {
  return (
    <header className="absolute z-50 flex w-full items-center gap-x-10 p-4">
      <SiteLogo />
      <SiteNav />
      <UserNav />
    </header>
  )
}
