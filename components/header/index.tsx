"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IconMap from '~/icon'
import Call_Icon from '~/icon/Call-icon.png'
import LanguageSelector from '../language'



const Header = () => {
  return (
    <header >
      <div className="container">
        <div className='flex items-center justify-between p-2'>
          <div className="flex justify-center items-center">
            <Link href='#' className='px-[16px]'><span className='text-[21px] text-pink-500 font-black'>%</span> <span className='px-[12px]'>aksia va chegirmalar</span></Link>
            <Link href='#' className='flex items-center px-[26px]'><IconMap /> <span className='px-[16px]'>Dokon</span></Link>
          </div>
          <div className='flex'>
            <Link href='#' className='flex items-center px-[26px]'><Image src={Call_Icon} alt='icon' width={18} height={18} /> <span className='px-[16px]'>91 434 93 92</span></Link>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
