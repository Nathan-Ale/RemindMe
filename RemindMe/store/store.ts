import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import remindersReducer from "./slices/reminderSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        reminders: remindersReducer,
    },
});

store.subscribe(() => { console.log("Estado actualizado:", store.getState()); });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;