import { NavItem } from '@/components/Navigation/NavItem'

export const UserNav = () => {
  const authenticated = false
  return (
    <nav className="mb-10 mt-5 flex w-full justify-end space-x-5 text-right">
      <NavItem href="/login" condition={!authenticated}>
        Login
      </NavItem>
      <NavItem href="/about" condition={authenticated}>
        About
      </NavItem>
      <NavItem href="/" condition={authenticated}>
        Logout
      </NavItem>
    </nav>
  )
}
