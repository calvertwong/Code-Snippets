import cookieParser from "cookie-parser";
import { app } from "../../server";

function CookieParser(): void {
  app.use(cookieParser());
}

export { CookieParser };
