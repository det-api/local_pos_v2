import { NextFunction, Response, Request } from "express";
import { getUser } from "../service/user.service";
import { compass } from "../utils/helper";

//if you want to access multi role change this like hasAnyRole

export const managerValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let user = await getUser({ email: req.body.email });

    if (!user || !compass(req.body.password, user[0].password)) {
      throw new Error("Creditial Error");
    }
    delete req.body.email;
    delete req.body.password;
    next();
  } catch (e) {
    next(new Error(e));
  }
};
