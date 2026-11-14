import type { RootState } from "@/redux/store";

export const selectFilters = (state: RootState) => state.filters
export const selectQuery = (state: RootState) => state.filters.query
export const selectStatus = (state: RootState) => state.filters.status
export const selectPriority = (state: RootState) => state.filters.priority
export const selectSort = (state: RootState) => state.filters.sort