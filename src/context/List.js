import { useReducer, createContext } from "react";
import listReducer from "../reducer/listReducer";

const initialList = ["text1","text2"];

export const TasksContext = createContext();
export const TasksDispatchContext = createContext();

export function TasksProvider({ children }) {
    const [state, dispatch] = useReducer(listReducer, { list: initialList });

    return (
        <TasksContext.Provider value={state}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}