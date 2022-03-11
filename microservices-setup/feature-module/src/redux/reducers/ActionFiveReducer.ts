import { ActionType } from "../../entities/ActionType";

type stateType = {
  stringFive: string;
};

const initialState: stateType = {
  stringFive: ""
};

function actionFiveReducer(state = initialState, action: ActionType<string>): stateType {
  if (action.type === "ACTION_FIVE") {
    return {
      ...state,
      stringFive: action.payload ?? ""
    };
  }

  return state;
}

export { actionFiveReducer };
