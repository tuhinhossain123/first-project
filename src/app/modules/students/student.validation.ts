import Joi from 'Joi';

// Define the Joi schema for UserName
const userNameValidationJoiSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .regex(/^[A-Z][a-zA-Z]*$/)
    .messages({
      'string.empty': 'First name is required.',
      'string.max': 'First Name cannot be more than 20 characters.',
      'string.pattern.base': '{#value} is not capitalized format.',
    }),
  middleName: Joi.string().trim().optional(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[a-zA-Z]+$/)
    .messages({
      'string.empty': 'Last name is required.',
      'string.pattern.base': '{#value} is not a valid name.',
    }),
});

// Define the Joi schema for Guardian
const guardianValidatiionJoiSchema = Joi.object({
  father: Joi.string().trim().required().messages({
    'string.empty': 'Father name is required.',
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    'string.empty': 'Father’s occupation is required.',
  }),
  fatherContact: Joi.string().trim().required().messages({
    'string.empty': 'Father’s contact number is required.',
  }),
  mother: Joi.string().trim().required().messages({
    'string.empty': 'Mother name is required.',
  }),
  motherOccupation: Joi.string().trim().required().messages({
    'string.empty': 'Mother’s occupation is required.',
  }),
  motherContact: Joi.string().trim().required().messages({
    'string.empty': 'Mother’s contact number is required.',
  }),
});

// Define the Joi schema for LocalGuardian
const localGuardianValodationJoiSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian name is required.',
  }),
  occupation: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian’s occupation is required.',
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian’s contact number is required.',
  }),
  address: Joi.string().trim().required().messages({
    'string.empty': 'Local guardian’s address is required.',
  }),
});

// Define the Joi schema for Student
const studentValidationJoiSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    'string.empty': 'Student ID is required.',
  }),
  name: userNameValidationJoiSchema.required().messages({
    'object.base': 'Student name is required.',
  }),
  gender: Joi.string()
    .trim()
    .valid('male', 'female', 'other')
    .required()
    .messages({
      'any.only': '{#value} is not a valid gender option.',
      'string.empty': 'Gender is required.',
    }),
  dateOfBirth: Joi.string().trim().optional(),
  contactNo: Joi.string().trim().required().messages({
    'string.empty': 'Student contact number is required.',
  }),
  email: Joi.string().trim().email().required().messages({
    'string.empty': 'Email address is required.',
    'string.email': '{#value} is not valid.',
  }),
  emergencyContact: Joi.string().trim().optional(),
  bloodGroup: Joi.string()
    .trim()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .messages({
      'any.only': '{#value} is not a valid blood group.',
    }),
  presetAddress: Joi.string().trim().required().messages({
    'string.empty': 'Present address is required.',
  }),
  permanentAddress: Joi.string().trim().required().messages({
    'string.empty': 'Permanent address is required.',
  }),
  guardian: guardianValidatiionJoiSchema.required().messages({
    'object.base': 'Guardian details are required.',
  }),
  localGuardian: localGuardianValodationJoiSchema.required().messages({
    'object.base': 'Local guardian details are required.',
  }),
  photoUrl: Joi.string().trim().optional(),
  isActive: Joi.string()
    .trim()
    .valid('active', 'blocked')
    .default('active')
    .messages({
      'any.only': '{#value} is not a valid status option.',
    }),
});

export default studentValidationJoiSchema;
