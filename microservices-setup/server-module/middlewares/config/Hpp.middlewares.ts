import hpp from "hpp";
import { app } from "../../server";

function Hpp(): void {
  // protect against HTTP Parameter Pollution attacks
  app.use(hpp());
}

export { Hpp };
