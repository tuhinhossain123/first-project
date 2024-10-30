import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });
export default {
  database_url:
    process.env.DATABASE_URL || 'mongodb://localhost:27017/mydatabase',
  port: process.env.PORT || 3000,
  bycrpt_salt_round: process.env.BYCRPT_SALT_ROUND,
};
