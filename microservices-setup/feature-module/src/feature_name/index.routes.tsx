import { Route } from "react-router-dom";

import { SamplePage } from "./index";

/**
* Outcome will be something like this: http://localhost:3000/feature/sample-page
*/
const FeatureRoutes = (
  <Route path="feature">
    <Route path="sample-page" element={<SamplePage />} />,
  </Route>
);

export { FeatureRoutes };
