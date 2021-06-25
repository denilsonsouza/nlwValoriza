import { Request, Response, NextFunction } from "express"
import { httpException } from "../exceptions/httpException"


function errorHandle(error: httpException, request: Request, response: Response, next: NextFunction) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  response.status(status).send({ status, message, });

}

export { errorHandle }