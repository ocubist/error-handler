import { CustomError } from "../CustomError";
import { CustomErrorProps } from "../types/CustomErrorProps";

export class UnexpectedError extends CustomError {
  constructor(unexpectedErrorProps: CustomErrorProps) {
    const { message, payload, cause, origin } = unexpectedErrorProps;
    super({
      name: "UnexpectedError",
      message,
      payload,
      origin,
      cause,
    });
  }
}
