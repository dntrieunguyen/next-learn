import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
   MdDashboard,
   MdSupervisedUserCircle,
   MdShoppingBag,
   MdAttachMoney,
   MdWork,
   MdAnalytics,
   MdPeople,
   MdOutlineSettings,
   MdHelpCenter,
   MdLogout,
} from 'react-icons/md';

const menuItems = [
   {
      title: 'Pages',
      list: [
         {
            title: 'Dashboard',
            path: '/dashboard',
            icon: <MdDashboard />,
         },
         {
            title: 'Users',
            path: '/dashboard/users',
            icon: <MdSupervisedUserCircle />,
         },
         {
            title: 'Products',
            path: '/dashboard/products',
            icon: <MdShoppingBag />,
         },
         {
            title: 'Transactions',
            path: '/dashboard/transactions',
            icon: <MdAttachMoney />,
         },
      ],
   },
   {
      title: 'Analytics',
      list: [
         {
            title: 'Revenue',
            path: '/dashboard/revenue',
            icon: <MdWork />,
         },
         {
            title: 'Reports',
            path: '/dashboard/reports',
            icon: <MdAnalytics />,
         },
         {
            title: 'Teams',
            path: '/dashboard/teams',
            icon: <MdPeople />,
         },
      ],
   },
   {
      title: 'User',
      list: [
         {
            title: 'Settings',
            path: '/dashboard/settings',
            icon: <MdOutlineSettings />,
         },
         {
            title: 'Help',
            path: '/dashboard/help',
            icon: <MdHelpCenter />,
         },
      ],
   },
];

const SideBar = ({ className }) => {
   return (
      <div className={className}>
         <div className="flex items-center justify-start gap-5 mb-4 profile">
            <Image
               className="rounded-full"
               src={'/noavatar.jpg'}
               alt=""
               width="50"
               height="50"
            ></Image>
            <div className="flex flex-col detail">
               <span>name</span>
               <span className="text-sm">user</span>
            </div>
         </div>
         <ul>
            {menuItems.map(cat => (
               <li key={cat.title}>
                  <li>{cat.title}</li>
                  {cat.list.map(list => (
                     <li key={list.title}>
                        <Link
                           href={list.path}
                           className={cn(
                              'flex px-2 rounded-md py-3 my-2 justify-start items-center text-sm',
                              'hover:bg-slate-500',
                           )}
                        >
                           <i>{list.icon}</i> {list.title}
                        </Link>
                     </li>
                  ))}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default SideBar;
