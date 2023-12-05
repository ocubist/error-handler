import { z } from "zod";
// import { payloadSchema } from "./payload";

export const PayloadSchema = z.object({}).catchall(z.unknown());

export type Payload = z.infer<typeof PayloadSchema>;

export const CustomErrorPropsSchema = z.object({
  message: z.string(),
  origin: z.unknown().optional(),
  cause: z.string().optional(),
  payload: PayloadSchema.optional(),
});

export type CustomErrorProps = z.infer<typeof CustomErrorPropsSchema>;

