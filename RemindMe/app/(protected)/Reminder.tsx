import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { router } from 'expo-router';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useTheme } from "@/contexts/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/themes";
import { addReminder } from '../../store/slices/reminderSlice';
import { RootState } from '../../store/store';
import { i18n } from '@/contexts/LanguajeContext';

const Reminder = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
  const { theme } = useTheme();
  const themeStyles = theme === "dark" ? darkTheme : lightTheme;

  const dispatch = useDispatch();

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

    dispatch(addReminder(newReminder));
    router.replace('/(protected)/inicio');
    Alert.alert('Éxito', 'Recordatorio guardado correctamente.');
    setTitle('');
    setDescription('');
  };

  return (
    <View style={[styles.container, themeStyles.containerInicio]}>
      <TextInput
        style={themeStyles.tituloInput}
        placeholder={i18n.t("Title")}
        placeholderTextColor={"#aaa"}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={themeStyles.descripcioninput}
        placeholder={i18n.t("Description")}
        placeholderTextColor={"#aaa"}
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={5}
      />

      <View style={styles.containerButtons}>
        <TouchableOpacity style={themeStyles.button} onPress={showDatePicker}>
          <Text style={themeStyles.buttonText}>{i18n.t("SelectDT")}</Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          date={date}
        />

        <TouchableOpacity style={themeStyles.button} onPress={handleSave}>
          <Text style={themeStyles.buttonText}>{i18n.t("SaveReminder")}</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{date.toLocaleString()}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  dateText: {
    fontSize: 14,
    marginBottom: 16,
    color: '#666',
  },
  containerButtons: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default Reminder;