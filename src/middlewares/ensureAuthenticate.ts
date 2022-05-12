import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {

    throw new Error("Unauthorized user!");
  }


  const [, token] = authToken.split(" ");

  const { sub } = verify(token, process.env.HASH) as IPayload;
  req.user_id = sub;

  return next();
}
