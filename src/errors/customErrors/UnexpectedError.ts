import { AdditionalProps } from "../types/AdditionalProps";
import { MyError } from "../MyError";

export class UnexpectedError extends MyError {
  constructor(msg: string, additionalProps: AdditionalProps = {}) {
    super({
      name: "UnexpectedError",
      msg,
      additionalProps,
    });
  }
}
