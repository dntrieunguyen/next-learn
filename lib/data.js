import { connectToDB } from './utils';

export const fetchUsers = async (q, page) => {
   try {
      connectToDB();
      console.log('success');
   } catch (err) {
      console.log(err);
      throw new Error('Failed to fetch users!');
   }
};
