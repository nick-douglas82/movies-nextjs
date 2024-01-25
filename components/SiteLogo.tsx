import Link from 'next/link'

export const SiteLogo = () => {
  return (
    <Link href="/" className="shrink-0">
      <h1 className="text-4xl font-bold tracking-tighter text-white">
        <span className="text-orange-400">NextJS</span> Movies
      </h1>
    </Link>
  )
}
