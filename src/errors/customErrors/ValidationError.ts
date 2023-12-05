import { z } from "zod";
import { CustomError } from "../CustomError";
import { Payload, CustomErrorPropsSchema } from "../types/CustomErrorProps";

const ValidationErrorDetailSchema = z.object({
  path: z.string(),
  msg: z.string(),
});

export type ValidationErrorDetail = z.infer<typeof ValidationErrorDetailSchema>;

export const ValidationErrorPropsSchema = CustomErrorPropsSchema.merge(
  z.object({
    validationErrorDetails: z.array(ValidationErrorDetailSchema),
  })
);

export type ValidationErrorProps = z.infer<typeof ValidationErrorPropsSchema>;

export class ValidationError extends CustomError {
  constructor(props: ValidationErrorProps) {
    const { message, payload, cause, origin, validationErrorDetails } = props;

    let thePayload: Payload = { validationErrorDetails };

    if (payload !== undefined) {
      thePayload = { ...thePayload, payload };
    }

    super({ name: "ValidationError", message, payload, cause, origin });
  }
}
