export type TTaskStatus = "pending" | "in-progress" | "done";
export type TTaskPriority = "low" | "medium" | "high";

export interface ITask {
  id: string;
  title: string;
  description: string;
  priority: TTaskPriority;
  status: TTaskStatus;
  createdAt: number;
  updatedAt: number;
}

export type TInitialState = ITask[];
