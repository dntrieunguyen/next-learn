import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

export function cn(...inputs) {
   return twMerge(clsx(inputs));
}

const connection = {};
export const connectToDB = async () => {
   try {
      if (connection.isConnected) return;
      const db = await mongoose.connect(process.env.MONGO_DB);
      connection.isConnected = db.connections[0].readyState;
   } catch (error) {
      console.log(error);
      throw new Error(error);
   }
};
