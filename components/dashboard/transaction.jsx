import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const Transaction = ({ data }) => {
   // console.log(data);
   return (
      <div className={cn(' w-full ')}>
         <h2 className={cn('title font-medium my-2')}>Latest Transactions</h2>
         <table className={cn('table w-full')}>
            <thead className="w-full">
               <tr>
                  <td>Namea</td>
                  <td>Status</td>
                  <td>Date</td>
                  <td>Amount</td>
               </tr>
            </thead>
            <tbody>
               {data.map((item, index) => (
                  <tr key={index}>
                     <td>
                        <div className={cn('user flex gap-2 items-center')}>
                           <Image
                              src="/noavatar.jpg"
                              alt=""
                              width={30}
                              height={30}
                              className={cn('userImage')}
                           />
                           {item.name}
                        </div>
                     </td>
                     <td>
                        <span
                           className={cn(
                              `${
                                 item.status === 'pending'
                                    ? ' text-white text-sm font-medium capitalize  p-1 bg-red-700 rounded-md'
                                    : ' text-white text-sm font-medium capitalize p-1 bg-green-900 rounded-md'
                              }`,
                           )}
                        >
                           {item.status}
                        </span>
                     </td>
                     <td>{item.date}</td>
                     <td>${item.amount}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Transaction;
