import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

const ItemLink: React.FC<{ link: string; exact?: boolean }> = ({ children, link, exact }) => {
  const { pathname } = useRouter()

  const active = exact ? pathname === link : pathname.startsWith(link)

  return (
    <Link href={link} passHref>
      <a
        className={clsx('border-b-2 px-1 text-lg py-1 border-b-transparent hover:border-b-white transition-all select-none', {
          'border-b-white': active,
        })}
      >
        {children}
      </a>
    </Link>
  )
}

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 left-0 bg-black bg-opacity-20 p-3">
      <div className="container mx-auto flex items-center">
        <div className="text-3xl font-extrabold">PIKOKR</div>
        <div className="flex-grow" />
        <div className="flex items-center gap-4">
          <ItemLink link="/" exact>
            About
          </ItemLink>
          <ItemLink link="/posts">Blog</ItemLink>
          <ItemLink link="/contact">Contact</ItemLink>
        </div>
      </div>
    </div>
  )
}

export default Header
