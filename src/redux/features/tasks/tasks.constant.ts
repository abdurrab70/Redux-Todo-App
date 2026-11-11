import type { TTaskStatus } from "./tasks.type.ts";
import type { TTaskPriority } from "./tasks.type.ts";

export const TASK_STATUS: TTaskStatus[] = ["pending", "in-progress", "done"];
export const TASK_PRIORITIES: TTaskPriority[] = ["low", "medium", "high"];

export const STATUS_LABEL: Record<TTaskStatus, string> = {
  pending: "Pending",
  "in-progress": "In Progress",
  done: "Done",
};
export const PRIORITY_LABEL: Record<TTaskPriority, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};
