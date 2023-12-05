import { CustomError } from "../CustomError";
import { CustomErrorProps } from "../types/CustomErrorProps";

export class FatalError extends CustomError {
  constructor(fatalErrorProps: CustomErrorProps) {
    const { message, payload, cause, origin } = fatalErrorProps;
    super({
      name: "FatalError",
      message,
      payload,
      origin,
      cause,
    });
  }
}
