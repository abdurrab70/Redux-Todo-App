import { createSlice } from '@reduxjs/toolkit';

interface initialState{
    priority: string;
}

const initialState = {
    priority: "",
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {},
});

export default filtersSlice.reducer;