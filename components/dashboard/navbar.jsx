'use client';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
   MdNotifications,
   MdOutlineChat,
   MdPublic,
   MdSearch,
} from 'react-icons/md';

const NavBar = () => {
   const pathName = usePathname().split('/').pop();

   return (
      <nav
         className={cn(
            'flex justify-between p-3 bg-slate-800 rounded-md my-3 items-center',
         )}
      >
         <div className="capitalize navTitle">{pathName}</div>
         <div className="flex gap-2 navMain">
            <div
               className={cn(
                  'flex bg-[#2e374a] rounded-md p-2 items-center gap-5 justify-center',
               )}
            >
               <MdSearch className={cn('hover:cursor-pointer')}></MdSearch>
               <input
                  type="text"
                  className={cn('bg-transparent outline-none rounded-md')}
                  placeholder="Search ..."
               />
            </div>
            <div
               className={cn('flex items-center justify-center gap-5 navIcon')}
            >
               <MdNotifications
                  className={cn('hover:cursor-pointer')}
               ></MdNotifications>
               <MdOutlineChat
                  className={cn('hover:cursor-pointer')}
               ></MdOutlineChat>
               <MdPublic className={cn('hover:cursor-pointer')}></MdPublic>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
