import Link from 'next/link'
import React from 'react'
import IconMap from '~/icon'
import IconCall from '~/icon/call-icon'

const Header = () => {
  return (
    <header >
      <div className="container">
        <div className='flex items-center justify-start p-2'>
          <div className="flex justify-start items-center">
            <Link href='#' className='px-[16px]'><span className='text-[21px] text-pink-500 font-black'>%</span> <span className='px-[12px]'>aksia va chegirmalar</span></Link>
            <Link href='#' className='flex items-center px-[26px]'><IconMap /> <span className='px-[16px]'>Dokon</span></Link>
          </div>
          <div>
            <Link href='#' className='flex items-center px-[26px]'><IconCall /> <span className='px-[16px]'>91 434 93 92</span></Link>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
