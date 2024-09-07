"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import SidebarItems from './SidebarItems';
import { cn } from '@/lib/utils/config';
import { images, routes } from '@/config';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ className }) => {

  return (
    <div className={cn("lg:w-[256px] lg:fixed h-full flex left-0 top-0 px-4 border-r-2 flex-col", className)}>
      <div className='pl-4 flex items-center p-5 pb-8'>
        <Link href={'/learn'} className='cursor'>
          <Image src={images.logo} className='rounded-lg' width={40} height={40} alt="logo" />
        </Link>
        <h1 className='pt-2 pl-2 text-xl font-bold text-theme-500'>
          Test
        </h1>
      </div>
      <div className='flex flex-col gap-y-2 flex-1'>
        <SidebarItems label="Reviews" href={routes.dashboard.admin.reviews} icon={faStar} />
      </div>
    </div>
  )
}

export default Sidebar;