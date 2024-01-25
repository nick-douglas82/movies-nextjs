import { NavItem } from '@/components/Navigation/NavItem'
export const SiteNav = () => {
  return (
    <div className="flex w-full space-x-5">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/movies">Movies</NavItem>
      <NavItem href="/tv">TV</NavItem>
      <NavItem href="/people">People</NavItem>
    </div>
  )
}
