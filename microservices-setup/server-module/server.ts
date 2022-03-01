import express from "express";

import NodeCache from "node-cache";
import https from "https";
import { InvokeMiddlewares } from "./middlewares/index";
import { InvokeRoutes } from "./routes/index";

if(process.env.NODE_ENV === "development") {
  require("custom-env").env(true);
}

const app: express.Application = express();

InvokeMiddlewares();
InvokeRoutes();

app.listen(process.env.PORT, () =>
  console.log(`Server is running ${process.env.NODE_ENV === "production" ? "" : `on Port ${process.env.PORT}`}......`)
);

export { app };
