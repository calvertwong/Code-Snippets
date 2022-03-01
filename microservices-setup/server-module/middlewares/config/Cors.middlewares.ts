import cors from "cors";
import { app } from "../../server";

function Cors(): void {
  app.use(cors({
    origin: ["http://www.domain.com"]
  }));
}

export { Cors };
