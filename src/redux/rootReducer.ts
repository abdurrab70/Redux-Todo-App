import { combineReducers } from '@reduxjs/toolkit'
import tasksReducer from './features/tasks/tasks.slice.ts'
import filtersReducer from './features/filters/filters.slice.ts'

export const rootReducer = combineReducers({
        tasks: tasksReducer,
        filters: filtersReducer,
})