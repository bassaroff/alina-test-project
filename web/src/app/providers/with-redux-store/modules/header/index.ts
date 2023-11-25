import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
    title: string
}

const initialState: InitialState = {
    title: ''
}

const headerSlice = createSlice({
    name: 'HEADER',
    initialState,
    reducers: {
        setHeaderTitle: (state, { payload }: PayloadAction<string>) => {
            state.title = payload;
        }
    }
});

export const {
    setHeaderTitle
} = headerSlice.actions;

export default headerSlice.reducer;