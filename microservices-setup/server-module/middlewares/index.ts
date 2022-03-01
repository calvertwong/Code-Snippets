import { BodyParser } from "./config/BodyParser.middlewares";
import { Compression } from "./config/Compression.middlewares";
import { CookieParser } from "./config/CookieParser.middlewares";
import { Cors } from "./config/Cors.middlewares";
import { Helmet } from "./config/Helmet.middlewares";
import { Hpp } from "./config/Hpp.middlewares";
import { ResponseHeader } from "./custom/ResponseHeader.middlewares";

function InvokeMiddlewares() {
  // from NPM
  BodyParser();
  Compression();
  CookieParser();
  Cors();
  Helmet();
  Hpp();

  // custom middlewares
  ResponseHeader();
}

export { InvokeMiddlewares };
