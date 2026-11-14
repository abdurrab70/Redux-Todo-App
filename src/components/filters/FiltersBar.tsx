import { SearchIcon, XIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PRIORITY_LABEL, STATUS_LABEL, TASK_PRIORITIES, TASK_STATUS } from "@/redux/features/tasks";
import { changePriorityFilter, changeQuery, changeSortMode, changeStatusFilter, clearFilter, selectPriorityFilter, selectQuery, selectSortMode, selectStatusFilter, type TSortMode } from "@/redux/features/filters";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const SORT_LABEL : Record<TSortMode, string> = {
  newest: "Newest first",
  oldest: "Oldest first",
};

export function FiltersBar() {

  const dispatch = useAppDispatch();
  const query = useAppSelector(selectQuery);
  const status = useAppSelector(selectStatusFilter);
  const priority = useAppSelector(selectPriorityFilter);
  const sort = useAppSelector(selectSortMode);


  return (
    <Card className="flex flex-col gap-3 p-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search tasks…" className="pl-9"
        onChange={(e) => dispatch(changeQuery(e.target.value))}
        value={query}
        />
      </div>

      <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center">
        <Select value={status} onValueChange={(value) => dispatch(changeStatusFilter(value))} >
          <SelectTrigger className="min-w-[7.5rem]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            {TASK_STATUS.map((s)=>(
              <SelectItem key={s} value={s}>
                {STATUS_LABEL[s]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={priority} onValueChange={(value) => dispatch(changePriorityFilter(value))}>
          <SelectTrigger className="min-w-[7.5rem]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All priorities</SelectItem>
            {TASK_PRIORITIES.map((p) => (
              <SelectItem key={p} value={p}>
                {PRIORITY_LABEL[p]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sort} onValueChange={(value) => dispatch(changeSortMode(value))}>
          <SelectTrigger className="min-w-[7.5rem]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>{(Object.keys(SORT_LABEL) as TSortMode[]).map((sort) => (
            <SelectItem key={sort} value= {sort}>{SORT_LABEL[sort]}</SelectItem>
          ))}</SelectContent>
        </Select>
      </div>

      <Button variant="ghost" size="sm" onClick={() => dispatch(clearFilter())}>
        <XIcon className="size-4" /> Clear
      </Button>
    </Card>
  );
}
