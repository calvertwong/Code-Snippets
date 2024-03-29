import { app } from "../../server";
import { NextFunction, Request, Response } from "express";

function ResponseHeader(): void {
  app.use((_: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", ["*"]);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE, OPTION");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType, Content-Type, Accept, Authorization, userid");
    res.setHeader("content-type", "application/javascript");
    next();
  });
}

export { ResponseHeader };
