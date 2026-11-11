export type TTaskStatus = "pending" | "in-progress" | "done";
export type TTaskPriority = "low" | "medium" | "high";

export interface ITask {
  title: string;
  description: string;
  priority: TTaskPriority;
  status: TTaskStatus;
}

export type TInitialState = ITask[];
