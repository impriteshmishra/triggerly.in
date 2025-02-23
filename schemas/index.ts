import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Please provide valid email" }),
  password: z.string().min(8, { message: "Minimum 8 characters needed." }),
});

export const registerSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
  name: z.string().min(1, { message: "Name is required" }),
});

export const newVerificationSchema = z.object({
  token: z.string().min(1, { message: "Token is required" }),
}); 
