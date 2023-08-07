'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navigation = () => {
  const pathname = usePathname() // to conditionally underline active pathname
  return (
    <nav className='flex w-full fixed font-lato'>
      <div className='navlinks mx-4 text-lg text-cyan-800 self-center uppercase'>
        <Link href='/about'
           className={`m-4 ${pathname === '/about' ? 'underline underline-offset-8' : ''}`}>About
        </Link>
        <Link href='/work'
          className={`m-4 ${pathname === '/work' ? 'underline underline-offset-8' : ''}`}>Work
        </Link>
        <Link href='/contact'
          className={`m-4 ${pathname === '/contact' ? 'underline underline-offset-8' : ''}`}>Contact
        </Link>
      </div>
              <Link href='/'>
        <h2 className="px-10 text-2xl uppercase font-oswald justify-self-center text-slate-600">Kendall Cercone</h2>
        </Link>

    </nav>
  )
}

export default Navigation