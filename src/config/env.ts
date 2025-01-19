import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  // Add other environment variables here
});

const envParse = () => {
  try {
    return envSchema.parse({
      VITE_API_URL: import.meta.env.VITE_API_URL,
      // Add other environment variables here
    });
  } catch (error) {
    console.error("❌ Invalid environment variables:", error);
    throw new Error("Invalid environment variables");
  }
};

export const env = envParse();
