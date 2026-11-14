import type { RootState } from "@/redux/store";

export const selectAllTasks = (state: RootState) => state.tasks;
export const selectTotalTasks = (state: RootState) => state.tasks.length;

//select task id

export const selectTaskById = (state: RootState, id: string) =>
  state.tasks.find((item) => item.id === id);
