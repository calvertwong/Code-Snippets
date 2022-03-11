export type ActionType<T> = {
  type: string;
  payload?: T | undefined;
};
