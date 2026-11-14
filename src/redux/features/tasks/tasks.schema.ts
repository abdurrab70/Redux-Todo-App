import type { ITaskInput } from "./tasks.type";

export const taskFromDefaultValue: ITaskInput = {
  title: "",
  description: "",
  status: "pending",
  priority: "medium",
};
