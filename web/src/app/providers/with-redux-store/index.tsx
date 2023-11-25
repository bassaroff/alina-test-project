import {ReactNode} from "react";
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import {HeaderSlice, SidebarSlice} from "@/app/providers/with-redux-store/modules";

export const store = configureStore({
    reducer: {
        header: HeaderSlice,
        sidebar: SidebarSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const withReduxStore = (component: () => ReactNode) => () => (
    <Provider store={store}>
        {component()}
    </Provider>
)