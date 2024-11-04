import { z } from 'zod';

const userSchema = z.object({
  id: z.string(),
  password: z
    .string()
    .max(20, { message: 'Password can not more than 20 chareacters' }),
  needsPassword: z.boolean().optional(),
  role: z.enum(['admin', 'student', 'faculty']),
  status: z.enum(['in-progress', 'block']),
  isDeleted: z.boolean().optional().default(false),
});
