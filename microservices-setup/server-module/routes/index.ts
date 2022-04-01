import { app } from "../server";
import { moduleOneRouter } from "./moduleOne.routes";
import { moduleTwoRouter } from "./moduleTwo.routes";

function InvokeRoutes() {
  app.use("/one", moduleOneRouter);
  app.use("/two", moduleTwoRouter);
}

export { InvokeRoutes };
