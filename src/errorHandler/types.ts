import { MyError } from "../errors";

export type DetectorFunction = (err: unknown) => boolean;
export type TransformerFunction = (err: unknown) => MyError;
export type ErrorHandlerMiddleware = (err: unknown) => unknown | MyError;
export type MiddlewareChain = ErrorHandlerMiddleware[];
