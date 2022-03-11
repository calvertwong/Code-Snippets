import { Route, Routes } from "react-router-dom";
import { combineReducers, createStore, Store } from "redux";
import { actionFiveReducer } from "./redux/reducers/ActionFiveReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Persistor, persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { Provider } from "react-redux";

const featurePersistConfig = {
  key: "featureRedux",
  storage
};

const featureReducers = combineReducers({
  actionFiveReducer
});

const persistedReducer = persistReducer(featurePersistConfig, featureReducers);
const featureStore = createStore(persistedReducer, composeWithDevTools());
const featurePersistor: Persistor = persistStore(featureStore);
type FeatureReduxState = ReturnType<typeof featureStore.getState>;

import { SamplePage } from "./pages/SamplePage";
import { ExamplePage } from "./pages/ExamplePage";
  
import "./App.css";

function App(): JSX.Element {
  return (
    <Provider store={featureStore}>
      <PersistGate loading={null} persistor={featurePersistor}>
        <Routes>
          <Route path="sample-page" element={<SamplePage />} />
          <Route path="example-page" element={<ExamplePage />} />
          <Route path="*" element={<div>Error path</div>} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}
export type { FeatureReduxState };

export default App;

