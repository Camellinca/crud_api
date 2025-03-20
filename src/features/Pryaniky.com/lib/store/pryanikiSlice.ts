import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Item, List } from '../../model/types';

export interface PryanikiState {
    tableList: List;
}

const initialState: PryanikiState = {
    tableList: [],
};

export const pryanikiSlice = createSlice({
    name: 'pryaniki',
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<List>) => {
            state.tableList = action.payload;
        },
        editItem: (state, action: PayloadAction<[Item, number]>) => {
            state.tableList[action.payload[1]] = action.payload[0];
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            state.tableList.splice(action.payload, 1);
        },
        createItem: (state, action: PayloadAction<Item>) => {
            state.tableList.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { setList, editItem, deleteItem, createItem } = pryanikiSlice.actions;

export default pryanikiSlice.reducer;
