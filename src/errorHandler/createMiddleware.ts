import { MyError } from "../errors";
import {
  DetectorFunction,
  ErrorHandlerMiddleware,
  TransformerFunction,
} from "./types";

export const createMiddleware = (
  detector: DetectorFunction,
  transformer: TransformerFunction
): ErrorHandlerMiddleware => {
  return (err: unknown): unknown | MyError => {
    if (err instanceof MyError) return err;
    if (!detector(err)) return err;
    else return transformer(err);
  };
};
