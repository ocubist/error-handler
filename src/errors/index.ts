// @index('./**/*.ts', f => `export * from '${f.path}'`)
export * from "./CustomError";
export * from "./customErrors/FatalError";
export * from "./customErrors/NonObjectError";
export * from "./customErrors/UnexpectedError";
export * from "./customErrors/UnhandledError";
export * from "./customErrors/ValidationError";
export * from "./types/CustomErrorProps";
// @endindex
