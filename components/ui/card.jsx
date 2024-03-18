import { cn } from '@/lib/utils';
import React from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = ({ item }) => {
   return (
      <div className={cn('container flex gap-5 p-3 bg-gray-800 rounded-md')}>
         <MdSupervisedUserCircle size={24} />
         <div className={cn('texts flex flex-col')}>
            <span className={cn('title capitalize')}>{item.title}</span>
            <span className={cn('number font-medium text-2xl')}>
               {item.number}
            </span>
            <span className={cn('detail')}>
               <span
                  className={cn(
                     `${item.change > 0 ? 'text-green-700' : 'text-red-700'}`,
                  )}
               >
                  {item.change}%
               </span>{' '}
               {item.change > 0 ? 'more' : 'less'} than previous week
            </span>
         </div>
      </div>
   );
};

export default Card;
