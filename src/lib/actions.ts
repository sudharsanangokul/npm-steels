'use server';

import { z } from 'zod';

const enquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Please describe your requirements."}),
});


export async function submitEnquiry(payload: {
    name: string;
    company?: string;
    email: string;
    phone: string;
    message?: string;
}) {
    const parsedPayload = enquirySchema.safeParse(payload);

    if (!parsedPayload.success) {
        return { success: false, message: "Invalid form data.", errors: parsedPayload.error.flatten().fieldErrors };
    }

    console.log('New Enquiry Submitted:', parsedPayload.data);

    // In a real-world application, you would integrate an email service here
    // to send the enquiry to your sales team and a confirmation to the customer.
    // e.g., using Nodemailer, SendGrid, or Resend.

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true, message: 'Your enquiry has been submitted successfully! We will get back to you shortly.' };
}
