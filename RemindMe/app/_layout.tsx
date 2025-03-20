import React from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { ReminderProvider } from '@/contexts/ReminderContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Stack } from 'expo-router';
import { LanguageProvider } from '@/contexts/LanguajeContext';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <ThemeProvider>
          <ReminderProvider>
            <AuthProvider>
              <Stack
              screenOptions={{
                headerShown:false
              }}
              >
                <Stack.Screen
                  name="Inicio"
                  options={{
                    title: 'Inicio',
                    headerShown: true,
                  }}
                />

                <Stack.Screen
                  name="Reminder"
                  options={{
                    title: 'Crear Recordatorio',
                    headerShown: true,
                  }}
                />
              </Stack>
            </AuthProvider>
          </ReminderProvider>
        </ThemeProvider>
      </LanguageProvider>
    </Provider>
  );
}