import { atom } from "recoil";

type Todo = {};

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});
