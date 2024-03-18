import { Button } from '@/components/ui/button';
import Input from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { DiscAlbum } from 'lucide-react';
import React from 'react';

const LoginPage = () => {
   return (
      <div
         className={cn(
            'top-1/2 p-2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute border rounded-md border-gray-700',
         )}
      >
         <form
            className={cn(
               'flex justify-center flex-col w-64 items-center gap-3 ',
            )}
         >
            <h1>Login</h1>
            <Input type="text" placeholder="username" name="username"></Input>
            <Input
               ype="password"
               placeholder="password"
               name="password"
            ></Input>

            <Button>submit</Button>
         </form>
      </div>
   );
};

export default LoginPage;
