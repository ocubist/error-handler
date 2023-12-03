import { MyError } from "../MyError";

export class UnhandledError extends MyError {
  constructor(err: unknown) {
    super({
      name: "UnhandledError",
      msg: "Error could not be processed. This shouldn't have happened",
      additionalProps: {
        err,
      },
    });
  }
}
