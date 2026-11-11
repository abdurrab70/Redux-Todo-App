export type TTaskType = "pending" | "in-progress" | "done";
export type TTaskPriority = "low" | "medium" | "high";

export interface ITask {
  title: string;
  description: string;
  priority: string;
  status: string;
}

export type TInitialState = ITask[];