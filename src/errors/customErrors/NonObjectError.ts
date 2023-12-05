import { CustomError } from "../CustomError";
import { CustomErrorProps } from "../types/CustomErrorProps";

export class NonObjectError extends CustomError {
  constructor(unexpectedErrorProps: CustomErrorProps) {
    const { message, payload, cause, origin } = unexpectedErrorProps;
    super({
      name: "NonObjectError",
      message,
      payload,
      origin,
      cause,
    });
  }
}
