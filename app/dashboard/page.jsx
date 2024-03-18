import RightBar from '@/components/dashboard/rightbar';
import Transaction from '@/components/dashboard/transaction';
import Card from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';

const cardItem = [
   {
      title: 'total user',
      number: 10325,
      change: 12,
   },
   {
      title: 'total user',
      number: 10325,
      change: -12,
   },
   {
      title: 'total user',
      number: 10325,
      change: 12,
   },
];

const dataTrans = [
   {
      name: 'John',
      status: 'pending',
      date: '12.03.2024',
      amount: 3500,
   },
   {
      name: 'John',
      status: 'pending',
      date: '12.03.2024',
      amount: 3500,
   },
   {
      name: 'John',
      status: 'pending',
      date: '12.03.2024',
      amount: 3500,
   },
];

const DashboardPage = () => {
   return (
      <div className="flex ">
         <div className="flex-3">
            <div className={cn('flex gap-2 ')}>
               {cardItem.map(item => (
                  <Card key={item.title} item={item}></Card>
               ))}
            </div>
            <div className={cn('w-full')}>
               <Transaction data={dataTrans}></Transaction>
            </div>
         </div>

         <div className="flex-1 rightBar top-3">
            <RightBar></RightBar>
         </div>
      </div>
   );
};

export default DashboardPage;
