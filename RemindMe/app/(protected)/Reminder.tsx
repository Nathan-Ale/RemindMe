import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { ReminderContext } from '../../contexts/ReminderContext';
import { router } from 'expo-router';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useTheme } from "@/contexts/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/themes";

const Reminder = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const {theme} = useTheme();
    const themeStyles = theme === "dark" ? darkTheme : lightTheme;

  const { addReminder } = useContext(ReminderContext);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: Date) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  const handleSave = () => {
    if (!title || !description) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    const newReminder = {
      id: Math.random().toString(),
      title,
      description,
      time: date.toISOString(),
    };

    addReminder(newReminder);
    router.replace('/(protected)/inicio');
    Alert.alert('Éxito', 'Recordatorio guardado correctamente.');
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Fecha y Hora:</Text>
      <Button title="Seleccionar Fecha y Hora" onPress={showDatePicker} />
      <Text style={styles.dateText}>{date.toLocaleString()}</Text>

      {/* Selector de fecha y hora */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={date}
      />

      <TouchableOpacity style={themeStyles.button} onPress={handleSave}>
        <Text style={themeStyles.buttonText}>Guardar Recordatorio</Text>
      </TouchableOpacity>
      {/* <Button title="Guardar Recordatorio" onPress={handleSave} /> */}
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    marginBottom: 16,
    color: '#666',
  },
});

export default Reminder;