import compression from "compression";
import { app } from "../../server";

function Compression(): void {
  app.use(compression());
}

export { Compression };
