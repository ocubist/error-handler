import { ZodError } from "zod";
import { ValidationError, ValidationErrorDetail } from "../../errors";
import { createMiddleware } from "../createMiddleware";

const detector = (err: unknown) => err instanceof ZodError;
const transformer = (err: unknown) => {
  const zodError = err as ZodError;

  const validationDetails: ValidationErrorDetail[] = zodError.errors.map(
    (e) => {
      return {
        path: e.path.join("."),
        msg: e.message,
      };
    }
  );

  return new ValidationError(`Zod-Validation-Error`, validationDetails, {
    err,
  });
};

export const zodErrorMiddleware = createMiddleware(detector, transformer);
