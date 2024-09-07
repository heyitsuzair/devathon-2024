"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarItems = ({ label, href, icon, animationContainer }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <>
            <button>
                <Link href={href} className={`flex items-center ${isActive ? 'active-class' : ''}`}>
                    {animationContainer ? (
                        <div className='mr-5 w-[32px] h-[32px]' ref={animationContainer}></div>
                    ) : (
                        <>
                            <div className="mr-5">
                                <FontAwesomeIcon icon={icon} color={'black'} className='text-black' />
                            </div>
                        </>
                    )}
                    <div className='pt-1'>
                        {label}
                    </div>
                </Link>
            </button>
        </>
    );
};

export default SidebarItems;
