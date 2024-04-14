'use client';
import Link from 'next/link'
import React from 'react'
import { AiFillHome } from "react-icons/ai";
import {usePathname} from 'next/navigation';
import classnames from 'classnames';
const items = [
  {
    title:'FAQ',
    url:'/faq'
  }]

const NavBar = () => {
  const currentPath = usePathname();
  return (
    <nav className='flex space-x-6 border-b mb-4 px-5 h-14 items-center'>
      <Link href="/">
        <AiFillHome />
      </Link>
      <ul className='flex space-x-6'>
        {
          items.map(el=>
          <li key={el.url}>
            <Link className={classnames({
              'text-zinc-500':el.url !== currentPath,
              'text-zinc-900':el.url === currentPath,
              'hover:text-zinc-800 transition-colors': true
            })}
              href={el.url}>{el.title}</Link>
          </li>)
        }
      </ul>
      
   </nav>
  )
}

export default NavBar