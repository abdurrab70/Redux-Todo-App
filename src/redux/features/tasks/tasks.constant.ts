import type { TTaskType } from "./tasks.type.ts";

export const TASK_STATUS : TTaskType[] = ["pending", "in-progress", "done"];

export const STATUS_LABEL : Record<TTaskType, string> = {
    pending: "Pending",
    "in-progress": "In Progress",
    done: "Done",
}