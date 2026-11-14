import type { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters";

export const selectAllTasks = (state: RootState) => state.tasks;
export const selectTotalTasks = (state: RootState) => state.tasks.length;

//select task id

export const selectTaskById = (state: RootState, id: string) =>
  state.tasks.find((item) => item.id === id);

//memorize function
export const selectTaskStatus = createSelector([selectAllTasks], (tasks) => {
  const stats = {
    byStatus: { pending: 0, "in-progress": 0, done: 0 },
    total: 0,
    byPriority: { high: 0, medium: 0, low: 0 },
  };

  for (const task of tasks) {
    stats.byPriority[task.priority] += 1;
    stats.byStatus[task.status] += 1;
  }

  stats.total = tasks.length;

  return stats;
});

export const selectFilterTasks = createSelector(
  [selectAllTasks, selectFilters],
  (tasks, filters) => {
    const { query, priority, status, sort } = filters;

    //search filter
    const searchTerm = query.trim().toLowerCase();

    const filtered = tasks.filter((task) => {
      if (priority !== "all" && task.priority !== priority) {
        return false;
      }
      // Filter by status
      if (status !== "all" && task.status !== status) {
        return false;
      }
      if (searchTerm) {
        const text = `${task.title} ${task.description} ${task.status} ${task.priority}`;
        if (!text.includes(searchTerm)) {
          return false;
        }
      }
      return true;
    });
    const sorted = [...filtered];

    switch (sort) {
      case "newest":
        sorted.sort((a, b) => b.createdAt - a.createdAt);
        break;
        case "oldest":
        sorted.sort((a, b) => a.createdAt - b.createdAt);
        break;
    }
    return sorted;
  },
);
