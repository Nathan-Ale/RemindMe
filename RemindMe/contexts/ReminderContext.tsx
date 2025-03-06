import React, { createContext, useState, ReactNode } from 'react';

export interface Reminder {
  id: string;
  title: string;
  description: string;
  time: string;
}

interface ReminderContextType {
  reminders: Reminder[];
  addReminder: (reminder: Reminder) => void;
  deleteReminder: (id: string) => void;
}

export const ReminderContext = createContext<ReminderContextType>({
  reminders: [],
  addReminder: () => {},
  deleteReminder: () => {},
});

interface ReminderProviderProps {
  children: ReactNode;
}

export const ReminderProvider: React.FC<ReminderProviderProps> = ({ children }) => {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const addReminder = (reminder: Reminder) => {
    setReminders((prevReminders) => [...prevReminders, reminder]);
  };

  const deleteReminder = (id: string) => {
    setReminders((prevReminders) => prevReminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <ReminderContext.Provider value={{ reminders, addReminder, deleteReminder }}>
      {children}
    </ReminderContext.Provider>
  );
};