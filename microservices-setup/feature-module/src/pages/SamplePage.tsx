import { FeatureReduxState } from "App";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SamplePage(): JSX.Element {
  const stringFive = useSelector<FeatureReduxState, string>((state: FeatureReduxState) => state.actionFiveReducer.stringFive);
  return (
    <div style={{ backgroundColor: "aquamarine" }}>
      <h2>Sample page</h2>
      {* if the route tree has feature/example-page, make sure you add / in front. If this is not added, you will see the url being appended *}
      <Link to="/feature/example-page">Go to Example page</Link>
    </div>
  );
}

export { SamplePage };
