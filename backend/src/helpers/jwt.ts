import jwt, { SignCallback } from "jsonwebtoken";
import config from "../config";

export const tokenVrfy = (token: string, clb?: (err: any, rslt: any) => void) =>
  jwt.verify(token, config.app.SECRETKEY as string, clb);

export const tokenSign = (str: string) =>
  jwt.sign({ str: str }, config.app.SECRETKEY as string);
