import Link from 'next/link'
import React from 'react'
import LogoIcon from '~/icon/logo'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

const BannerNavBar = () => {
  return (
    <div className=' container'>
      <div>
        <Link href='/' ><LogoIcon /></Link>
      </div>
      <nav></nav>

    </div>
  )
}

export default BannerNavBar