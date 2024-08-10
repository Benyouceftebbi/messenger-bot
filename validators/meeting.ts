import { z } from "zod";

// Define the Zod schema for the form
export const formMeetingSchema = z.object({
  name: z.string(),
  email: z.string().email("Invalid email address"),
  phone: z.string(), // You can add more specific validations for the phone number if needed
  notes: z.string().optional(),
  guests: z.array(z.object({email:z.string().email("Invalid email address")})).optional()
});

// Create a TypeScript type from the Zod schema
export type FormMeetingData = z.infer<typeof formMeetingSchema>;
