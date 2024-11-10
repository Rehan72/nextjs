import { z } from 'zod';

// Define the Zod schema for sign-up form validation
export const signupSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" }) // Name must be at least 1 character
    .max(50, { message: "Name cannot be longer than 50 characters" }), // Name cannot exceed 50 characters
  
  email: z
    .string()
    .email({ message: "Invalid email address" }) // Email must be valid
    .max(100, { message: "Email cannot be longer than 100 characters" }), // Email cannot exceed 100 characters
  
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }) // Password must be at least 6 characters
    .max(20, { message: "Password cannot be longer than 20 characters" }) // Password cannot exceed 20 characters
    .regex(/^[a-zA-Z0-9]+$/, { message: "Password must be alphanumeric" }), // Password must be alphanumeric
});

