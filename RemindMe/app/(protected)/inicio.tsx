import React, { useContext } from 'react';
import { View, FlatList, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ReminderContext } from '../../contexts/ReminderContext';
import ReminderCard from '../../components/ReminderCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { router } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from "@/contexts/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/themes";
import { i18n } from '@/contexts/LanguajeContext';



const Inicio = () => {
  const { logout } = useAuth();
  const { reminders } = useContext(ReminderContext);
  const {theme} = useTheme();
  const themeStyles = theme === "dark" ? darkTheme : lightTheme;

  
  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <View style={[themeStyles.containerInicio]}>

      <Text style={themeStyles.title}>{i18n.t("Reminders")}</Text>

      {/* Lista de recordatorios */}
      {reminders.length > 0 ? (
        <FlatList
          data={reminders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ReminderCard
              title={item.title}
              description={item.description}
              time={item.time}
            />
          )}
        />
      ) : (
        <Text style={styles.emptyMessage}>{i18n.t("Pending")}</Text>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={themeStyles.buttonText}>{i18n.t("Logout")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/(protected)/Reminder')}>
          <Text style={themeStyles.buttonText}>{i18n.t("CreateReminder")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos de la pantalla principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  button:{
    backgroundColor: '#1c8adb',
    padding: 10,
    borderRadius: 5,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Inicio;