import { cn } from '@/lib/utils';
import React from 'react';

const Input = ({ type, placeholder, name }) => {
   return (
      <>
         <input
            className={cn('outline-none p-2 rounded-md text-black')}
            type={type}
            placeholder={placeholder}
            name={name}
         />
      </>
   );
};

export default Input;
