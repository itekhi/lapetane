import Header from '@/components/header'
import MobileSidebar from '@/components/mobile-sidebar'


export default function MainLayout({ children }) {
  return (
    <>
      <Header />

      <main className="flex w-screen h-[100dvh] overflow-x-auto overflow-y-hidden tablet:overflow-unset relative">
        <MobileSidebar />

        {children}
      </main>
    </>
  )
}
