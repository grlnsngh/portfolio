"use server";

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  try {
    // In a real application, you would send an email, save to a database, etc.
    // For this example, we'll just log the values.
    console.log("New contact form submission:", values);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false };
  }
}
