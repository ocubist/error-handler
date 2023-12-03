import { MyError, UnexpectedError } from "../errors";
import { UnhandledError } from "../errors/customErrors/UnhandledError";
import { middlewareChain } from "./middlewareChain";
import { MiddlewareChain } from "./types";

export const consumeError = (
  err: unknown,
  rethrow = false,
  customMiddleware?: {
    customMiddlewareChain: MiddlewareChain;
    position: "start" | "end" | "replace";
  }
): MyError => {
  let error: MyError;

  try {
    let chain = middlewareChain;

    if (customMiddleware) {
      const { customMiddlewareChain, position } = customMiddleware;

      if (position === "end") {
        chain = [...chain, ...customMiddlewareChain];
      } else if (position === "replace") {
        chain = [...customMiddlewareChain];
      } else {
        chain = [...customMiddlewareChain, ...chain];
      }
    }

    const errorAfterMiddlewareChain = chain.reduce((acc, mw) => mw(acc), err);

    if (errorAfterMiddlewareChain instanceof MyError) {
      error = errorAfterMiddlewareChain;
    } else {
      error = new UnhandledError(err);
    }
  } catch (runtimeError) {
    error = new UnexpectedError(
      "This shouldn't have happened. Some Error occurred in the Error-Handler itself.",
      {
        err: runtimeError,
        details: {
          originalError: err,
        },
      }
    );
  }

  if (rethrow) {
    throw error;
  } else return error;
};
