import { FeatureReduxState } from "App";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ExamplePage(): JSX.Element {
  const stringFive = useSelector<FeatureReduxState, string>((state: FeatureReduxState) => state.actionFiveReducer.stringFive);
  return (
    <div style={{ backgroundColor: "aquamarine" }}>
      <h2>Example page</h2>
      {* if the route tree has feature/sample-page, make sure you add / in front. If this is not added, you will see the url being appended *}
      <Link to="/feature/sample-page">Go to Sample page</Link>
    </div>
  );
}

export { ExamplePage };
