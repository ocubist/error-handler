import { CustomError } from "../errors";
import {
  DetectorFunction,
  ErrorHandlerMiddleware,
  TransformerFunction,
} from "./types";

export const createMiddleware = (
  detector: DetectorFunction,
  transformer: TransformerFunction
): ErrorHandlerMiddleware => {
  return (err: unknown): unknown | CustomError => {
    if (err instanceof CustomError) return err;
    if (!detector(err)) return err;
    else return transformer(err);
  };
};
