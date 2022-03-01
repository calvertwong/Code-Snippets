import helmet from "helmet";
import { app } from "../../server";

function Helmet(): void {
  // protect against well-known web vulnerabilities from HTTP header settings
  app.use(helmet());
}

export { Helmet };
