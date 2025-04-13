import { useEffect, useState } from 'react'
import './Layout.scss'
import Navbar from '@/components/layouts/navbar/Navbar'

function Layout({ children }: { children: React.ReactNode }) {
  const [navbarHeight, setNavbarHeight] = useState(0)

  return (
    <>
      <Navbar setNavbarHeight={setNavbarHeight} />
      <main style={{ marginTop: navbarHeight }} className="layout">
        {children}
      </main>
    </>
  )
}

export default Layout
