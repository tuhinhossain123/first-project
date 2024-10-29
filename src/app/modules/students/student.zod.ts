import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, 'First name is required.')
    .max(20, 'First Name cannot be more than 20 characters.')
    .regex(/^[A-Z][a-z]*$/, 'First name must be capitalized.'),
  middleName: z.string().trim().optional(),
  lastName: z
    .string()
    .trim()
    .min(1, 'Last name is required.')
    .refine((val) => /^[A-Za-z]+$/.test(val), {
      message: 'Last name is not valid.',
    }),
});

const guardianValidationSchema = z.object({
  father: z.string().trim().min(1, 'Father name is required.'),
  fatherOccuption: z.string().trim().min(1, 'Father’s occupation is required.'),
  fatherContact: z
    .string()
    .trim()
    .min(1, 'Father’s contact number is required.'),
  mother: z.string().trim().min(1, 'Mother name is required.'),
  motherOccuption: z.string().trim().min(1, 'Mother’s occupation is required.'),
  motherContact: z
    .string()
    .trim()
    .min(1, 'Mother’s contact number is required.'),
});

const localGuardianValidationSchema = z.object({
  name: z.string().trim().min(1, 'Local guardian name is required.'),
  occupation: z
    .string()
    .trim()
    .min(1, 'Local guardian’s occupation is required.'),
  contactNo: z
    .string()
    .trim()
    .min(1, 'Local guardian’s contact number is required.'),
  address: z.string().trim().min(1, 'Local guardian’s address is required.'),
});

const studentValidationSchema = z.object({
  id: z.string().trim().min(1, 'Student ID is required.'),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().trim().optional(),
  contactNo: z.string().trim().min(1, 'Student contact number is required.'),
  email: z
    .string()
    .trim()
    .min(1, 'Email address is required.')
    .email('Email is not valid.'),
  emargencyContact: z.string().trim().default(''), 
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presetAddress: z.string().trim().min(1, 'Present address is required.'),
  permanentAddress: z.string().trim().min(1, 'Permanent address is required.'),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  photoUrl: z.string().trim(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});

export default studentValidationSchema;
