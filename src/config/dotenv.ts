import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || '';
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || '';
