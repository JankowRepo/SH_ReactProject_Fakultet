import {combineReducers} from "redux";
import { TodosList,todosListInitialState, todosStoreReducer} from "./reducers/todos.reducer";
import {Actions as TodoActions} from "./actions/todos.actions";

export type StoreActionTypes=TodoActions;

export interface StoreState{
    todos: TodosList;
};
export const initialStoreState: any={
    todos: todosListInitialState,
};

export const reducers=combineReducers<StoreState>({
    todos: todosStoreReducer,
});

