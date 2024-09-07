"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'

const SidebarItems = ({label, href, iconSrc, animationContainer}) => {
    const pathname = usePathname()
    const isActive = pathname === href

  return (
    <>
        <Button
            variant={isActive? 'sidebarOutline': 'sidebar'}
            className="justify-start h-[52px]"
        >
            <Link href={href} className='flex items-center'>
                {animationContainer ? <div className='mr-5 w-[32px] h-[32px]' ref={animationContainer}></div> : (
                    <>
                        <Image
                            src={iconSrc}
                            className='mr-5'
                            width={32}
                            height={32}
                            alt= {label}
                        />
                    </>
                )}
                <div className='pt-1'>
                    {label}
                </div>
            </Link>
        </Button>
    </>
  )
}

export default SidebarItems