import { z } from "zod";
import { AdditionalPropsSchema } from "./AdditionalProps";

export const MyErrorPropsSchema = z.object({
  msg: z.string(),
  name: z.string().min(1),
  additionalProps: AdditionalPropsSchema,
});

export type MyErrorProps = z.infer<typeof MyErrorPropsSchema>;
