import { UnexpectedError } from "../../errors";
import { createMiddleware } from "../createMiddleware";

const detector = (err: unknown): boolean => {
  return typeof err !== "object" || err === null;
};

const transformer = (err: unknown) => {
  let message = "Non-object error occurred";
  if (err === null) {
    message += ": null";
  } else {
    // Handle other non-object types (string, number, boolean, undefined)
    message += `: ${err}`;
  }
  return new UnexpectedError(message, { err });
};

export const primitiveMiddleware = createMiddleware(detector, transformer);
