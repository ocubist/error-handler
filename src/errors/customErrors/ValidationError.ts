import { AdditionalProps } from "../types/AdditionalProps";
import { MyError } from "../MyError";

export interface ValidationErrorDetail {
  path: string;
  msg: string;
}

export class ValidationError extends MyError {
  validationDetails: ValidationErrorDetail[];

  constructor(
    msg: string,
    validationDetails: ValidationErrorDetail[],
    additionalProps: AdditionalProps = {}
  ) {
    super({ name: "ValidationError", msg, additionalProps });
    this.validationDetails = validationDetails;
  }
}
