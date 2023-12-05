import { CustomError } from "../CustomError";

export class UnhandledError extends CustomError {
  constructor(err: unknown) {
    super({
      name: "UnhandledError",
      message: "Error could not be processed.",
      origin: err,
    });
  }
}
