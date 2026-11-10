import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer.ts'

export const store = configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.VITE_NODE_ENV !== 'production',
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
