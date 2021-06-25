import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
   sub : string;
}
export function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {

  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }
  const [, token] = authToken.split(" ");
  try {
    const { sub } = verify(token, "716e47e752d5be78c362a9a510200d4c") as IPayload

    request.user_id = sub;  // add user_id into request.

    return next();
  } catch {
    return response.status(401).end();
  }


}