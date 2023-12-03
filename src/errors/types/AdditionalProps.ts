import { z } from "zod";

export const AdditionalPropsSchema = z.object({
  err: z.unknown().optional(),
  details: z.any(),
});

export type AdditionalProps = z.infer<typeof AdditionalPropsSchema>;
