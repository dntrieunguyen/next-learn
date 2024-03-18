import NavBar from '@/components/dashboard/navbar';
import SideBar from '@/components/dashboard/sidebar';
import { cn } from '@/lib/utils';
import React from 'react';

const DashboardLayOut = ({ children }) => {
   return (
      <main className={cn('flex')}>
         <section className={cn('flex-1 p-2')}>
            <SideBar className={cn('top-10 sticky')}></SideBar>
         </section>
         <section className={cn('flex-[4] p-2')}>
            <NavBar></NavBar>
            {children}
         </section>
      </main>
   );
};

export default DashboardLayOut;
