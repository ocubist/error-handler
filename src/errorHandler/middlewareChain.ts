import { MiddlewareChain } from "./types";

// @index('./middlewares/**/*.ts', f => `import {${f.path.split('/').at(-1)}} from '${f.path}'`)
import { primitiveMiddleware } from "./middlewares/primitiveMiddleware";
import { zodErrorMiddleware } from "./middlewares/zodErrorMiddleware";
// @endindex

export const middlewareChain: MiddlewareChain = [
  // sort the primitive Errors out first
  primitiveMiddleware,
  // Specific Errors
  zodErrorMiddleware,
];
