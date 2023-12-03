import { MyErrorProps } from "./types/MyErrorProps";

export class MyError extends Error {
  name: string;
  err?: unknown;
  details?: string;

  constructor(myErrorProps: MyErrorProps) {
    const {
      msg,
      name,
      additionalProps: { details, err },
    } = myErrorProps;
    super(msg);
    this.name = name;
    this.err = err;
    this.details = details;

    // Maintaining the correct stack trace
    // @ts-ignore
    const errStackTrace = Error.captureStackTrace;

    try {
      errStackTrace(this.err || this, MyError);
    } catch {
      // fallback for old Browsers and stuff
      this.stack = new Error(msg).stack;
    }
  }

  getSummary(): string {
    let summary = `${this.name}: ${this.message}`;
    if (this.details) {
      summary += "\n\n" + this.details;
    }
    return summary;
  }
}
