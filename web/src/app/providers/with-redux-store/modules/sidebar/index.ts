import {createSlice} from "@reduxjs/toolkit";

interface InitialState {
    sidebarOpen: boolean
}

const initialState: InitialState = {
    sidebarOpen: false
}

const sidebarSlice = createSlice({
    name: 'SIDEBAR',
    initialState,
    reducers: {
        toggleSidebar: state => {
            state.sidebarOpen = !state.sidebarOpen;
        },
        openSidebar: state => {
            state.sidebarOpen = true;
        },
        closeSidebar: state => {
            state.sidebarOpen = false;
        }
    }
});

export const {
    toggleSidebar,
    openSidebar,
    closeSidebar
} = sidebarSlice.actions;

export default sidebarSlice.reducer;