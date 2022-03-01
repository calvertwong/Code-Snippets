import bodyParser from "body-parser";
import { app } from "../../server";

function BodyParser(): void {
  app.use(
    bodyParser.json({
      limit: "100mb"
    })
  );

  app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: "100mb",
      parameterLimit: 50000
    })
  );
}

export { BodyParser };
