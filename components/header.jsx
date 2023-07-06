import Link from 'next/link'

import LogoSvg from '@/assets/svg/logo.svg'


export default function Header() {
  return (
    <header className="hidden tablet:flex items-center justify-between h-header bg-main fixed inset-x-0 top-0 z-[990] px-main">
      <Link href="/">
        <LogoSvg className="tablet:h-9 desktop:h-12" />
      </Link>

      <nav className="flex items-center">
        <Link href="/great-deal" className="tablet:text-xl desktop:text-2xl font-bold uppercase">Great deal</Link>
        <span className="text-3xl mx-4">•</span>
        <Link href="/investment-opportunities" className="tablet:text-xl desktop:text-2xl font-bold uppercase">Investment opportunities</Link>
        <span className="text-3xl mx-4">•</span>
        <Link href="/vibes" className="tablet:text-xl desktop:text-2xl font-bold uppercase">Vibes</Link>
      </nav>

      <a href="/" className="button">Contact us</a>
    </header>
  )
}
