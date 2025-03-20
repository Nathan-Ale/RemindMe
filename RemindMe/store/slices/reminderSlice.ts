import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Reminder {
  id: string;
  title: string;
  description: string;
  time: string;
}

interface ReminderState {
  reminders: Reminder[];
}

const initialState: ReminderState = {
  reminders: [],
};

const reminderSlice = createSlice({
  name: 'reminders',
  initialState,
  reducers: {
    addReminder: (state, action: PayloadAction<Reminder>) => {
      state.reminders.push(action.payload);
    },
  },
});

export const { addReminder } = reminderSlice.actions;
export default reminderSlice.reducer;