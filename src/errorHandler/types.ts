import { CustomError } from "../errors";

export type DetectorFunction = (err: unknown) => boolean;
export type TransformerFunction = (err: unknown) => CustomError;
export type ErrorHandlerMiddleware = (err: unknown) => unknown | CustomError;
export type MiddlewareChain = ErrorHandlerMiddleware[];
