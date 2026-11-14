import type { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectAllTasks = (state: RootState) => state.tasks;
export const selectTotalTasks = (state: RootState) => state.tasks.length;

//select task id

export const selectTaskById = (state: RootState, id: string) =>
  state.tasks.find((item) => item.id === id);

//memorize function
export const selectTaskStatus = createSelector([selectAllTasks], (tasks) => {

  const stats = { byStatus: {pending: 0, "in-progress": 0, done: 0}, 
  total: 0, 
  byPriority: {high: 0, medium: 0, low: 0},
};

for(const task of tasks){
  stats.byPriority[task.priority] += 1;
  stats.byStatus[task.status] += 1;
}

stats.total = tasks.length;

  return stats;
})
