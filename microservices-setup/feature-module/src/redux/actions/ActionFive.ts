import { ActionType } from "../../entities/ActionType";

export const ActionFive = (payload: string): ActionType<string> => {
  return {
    type: "ACTION_FIVE",
    payload: payload
  };
};
