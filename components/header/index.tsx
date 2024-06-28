import Link from 'next/link'
import React from 'react'
import IconMap from '~/icon'

const Header = () => {
  return (
    <header >
        <div className="container">
            <div className='flex items-center'>
              <div className="flex gap-4">
                <Link href='#'><span className='text-[36px] text-pink-500 font-bold '>%</span> aksia va chegirmalar</Link>
                <Link href='#' className='flex items-center'><IconMap /> Dokon</Link>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header
