import { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundError: RequestHandler = (req, res, next) => {
  let err: Error & { status?: number } = new Error("Not Found");
  err.status = 404;
  next(err);
};

export const reqErrHandler: ErrorRequestHandler = (err, req, res, _) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
};
