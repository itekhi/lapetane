'use client';

import Link from "next/link"

import LogoSvg from '@/assets/svg/logo.svg'
import useOrientation from "@/hooks/use-orientation";


export default function MobileSidebar() {
  const { type } = useOrientation()

  return (
    <aside
      className={`
        tablet:hidden
        flex flex-col items-start flex-shrink-0 h-full
        bg-main
        ${type === 'landscape-primary' ? 'pl-[max(1rem,env(safe-area-inset-left))]' : 'pl-4'} py-6 pr-4
      `}
    >
      <LogoSvg className="h-8" />

      <nav className="flex flex-col mt-8">
        <Link className="text-lg font-bold uppercase" href="/great-deal">Great deal</Link>
        <Link className="text-lg font-bold uppercase mt-1" href="/investment-opportunities">Investment opportunities</Link>
        <Link className="text-lg font-bold uppercase mt-1" href="/vibes">Vibes</Link>
      </nav>

      <a href="" className="button mt-auto">Contact us</a>
    </aside>
  )
}
