import { fetchUsers } from '@/lib/data';

import React from 'react';

const UserPage = async () => {
   const user = await fetchUsers();
   console.log(user);
   return <div>UserPage</div>;
};

export default UserPage;
