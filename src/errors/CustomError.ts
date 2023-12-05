import { z } from "zod";
import { CustomErrorPropsSchema, Payload } from "./types/CustomErrorProps";

export const CustomErrorPropsWithNameSchema = CustomErrorPropsSchema.merge(
  z.object({ name: z.string().min(1) })
);

export type CustomErrorPropsWithName = z.infer<
  typeof CustomErrorPropsWithNameSchema
>;

export class CustomError extends Error {
  name: string;
  origin?: unknown;
  cause?: string;
  payload?: Payload;

  constructor(CustomErrorProps: CustomErrorPropsWithName) {
    const { message, name, payload, cause, origin } = CustomErrorProps;
    super(message);
    this.name = name;
    this.origin = origin;
    this.cause = cause;
    this.payload = payload;

    // Maintaining the correct stack trace
    // @ts-ignore
    const errStackTrace = Error.captureStackTrace;

    if (origin !== undefined) {
      try {
        errStackTrace(origin || this, CustomError);
      } catch {
        // fallback for old Browsers and stuff
        this.stack = new Error(message).stack;
      }
    }
  }
}
