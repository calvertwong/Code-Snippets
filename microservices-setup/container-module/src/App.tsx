import {ModuleRoutes} from "some feature module"

<BrowserRouter>
  <Routes>
    <Route index element={<Navigate replace to="production-login" />} />
    <Route path="production-login" element={<ProductionLogin />} />
    {ModuleRoutes}
  </Routes>
</BrowserRouter>
