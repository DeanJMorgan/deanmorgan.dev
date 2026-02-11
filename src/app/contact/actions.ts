"use server";

import { z } from "zod";
import { env } from "@/env";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  // Honeypot field
  botcheck: z.string().optional(),
});

export type ActionState = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  const rawData = Object.fromEntries(formData);
  
  // 1. Honeypot check
  if (rawData.botcheck) {
    // Silently ignore bot submissions
    console.warn("Honeypot triggered - bot detected");
    return { success: true, message: "Message sent successfully!" };
  }

  // 2. Validate data
  const validatedFields = contactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
    };
  }

  const { name, email, message } = validatedFields.data;

  // 3. Submit to Web3Forms
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "DeanMorgan-Dev-Portfolio/1.0",
      },
      body: JSON.stringify({
        access_key: env.WEB3FORMS_ACCESS_KEY,
        name,
        email,
        message,
        subject: `New Contact Form Submission from ${name}`,
        from_name: "DeanMorgan.dev Portfolio",
      }),
    });

    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return {
        success: false,
        message: "The submission service returned an invalid response. Please try again later.",
      };
    }

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: "Message sent successfully!",
      };
    } else {
      console.error("Web3Forms error:", result);
      return {
        success: false,
        message: result.message || "Failed to send message. Please try again.",
      };
    }
  } catch (error) {
    console.error("Submission error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
