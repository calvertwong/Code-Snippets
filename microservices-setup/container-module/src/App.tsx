import {ModuleRoutes} from "some feature module"

<BrowserRouter>
  <Routes>
    <Route index element={<Navigate replace to="production-login" />} />
    <Route path="production-login" element={<ProductionLogin />} />
    
    {* Refer to https://reactrouter.com/docs/en/v6/getting-started/overview, Descendant <Routes> *}
    <Route path="someModuleName/*" element={<ModuleRoutes />} />
  </Routes>
</BrowserRouter>
