import { Route, Routes } from "react-router-dom";

import { SamplePage } from "./index";

/**
* Outcome will be something like this: http://localhost:3000/feature/sample-page
*/
const FeatureRoutes = (): JSX.Element => (
  {* Refer to https://reactrouter.com/docs/en/v6/getting-started/overview, Descendant <Routes> *}
  <Routes>
    <Route path="sample-page" element={<SamplePage />} />,
  </Routes>
);

export { FeatureRoutes };
