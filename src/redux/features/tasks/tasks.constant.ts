import type { TTaskType } from "./tasks.type.ts";
import type { TTaskPriority } from "./tasks.type.ts";

export const TASK_STATUS : TTaskType[] = ["pending", "in-progress", "done"];
export const TASK_PRIORITIES : TTaskPriority[] = ["low", "medium", "high"];

export const STATUS_LABEL : Record<TTaskType, string> = {
    pending: "Pending",
    "in-progress": "In Progress",
    done: "Done",
}
export const PRIORITY_LABEL : Record<TTaskPriority, string> = {
    low: "Low",
    medium: "Medium",
    high: "High",
}