import { cn } from '@/lib/utils';

import React from 'react';
import { Button } from '../ui/button';

const RightBar = () => {
   return (
      <div className={cn('container flex flex-col gap-5 sticky')}>
         <div className={cn('item bg-gray-700 p-3 rounded-md')}>
            <div className={cn('bgContainer')}></div>
            <div className={cn('text flex flex-col gap-5')}>
               <span className={cn('notification text-sm font-bold')}>
                  🔥 Available Now
               </span>
               <h3 className={cn('title font-bold')}>
                  How to use the new version of the admin dashboard?
               </h3>
               <span className={cn('subtitle text-sm')}>
                  Takes 4 minutes to learn
               </span>
               <p className={cn('desc text-sm')}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit eius libero perspiciatis recusandae possimus.
               </p>
               <Button>Watch</Button>
            </div>
         </div>
         <div className={cn('item bg-gray-700 p-3 rounded-md')}>
            <div className={cn('bgContainer')}></div>
            <div className={cn('text flex flex-col gap-5')}>
               <span className={cn('notification text-sm font-bold')}>
                  🔥 Available Now
               </span>
               <h3 className={cn('title font-bold')}>
                  How to use the new version of the admin dashboard?
               </h3>
               <span className={cn('subtitle text-sm')}>
                  Takes 4 minutes to learn
               </span>
               <p className={cn('desc text-sm')}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit eius libero perspiciatis recusandae possimus.
               </p>
               <Button>Watch</Button>
            </div>
         </div>
      </div>
   );
};

export default RightBar;
