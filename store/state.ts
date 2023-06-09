import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction} from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import editReducer from "@/store/reducers/editReducer";
import swapThemeReducer from '@/store/reducers/switchThemeReducer';

const initialState = {

}
const rootReducer = combineReducers({
    theme: swapThemeReducer,
    todos: editReducer
})
export const setupStore = () => configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
export type AppThunk = ThunkAction<void, RootState, unknown, Action>