import { View, Text, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/themes";
import { Picker } from "@react-native-picker/picker";
import { useLanguage } from "@/contexts/LanguajeContext";

export default function SettingsScreen(){
    const {theme, toggleTheme} = useTheme();
    const { language, changeLanguage } = useLanguage();
    const styles = theme === "dark" ? darkTheme : lightTheme;

    return(
        <View style={styles.container}>
            <Text style={styles.text}> 
                Modo Actual: Claro | Oscuro
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={toggleTheme}>
                <Text
                style={styles.buttonText}
                >Camiar Tema</Text>
            </TouchableOpacity>

            <Text style={styles.text}>
                Idioma Actual: {language}
            </Text>

            <Picker
                selectedValue={language}
                style={{ height: 70, width: 200 }}
                mode="dropdown"
                onValueChange={(itemValue) => changeLanguage(itemValue)}>
                    <Picker.Item label="Ingles" value="en" />
                    <Picker.Item label="Español" value="es" />
            </Picker>
        </View>
    )
}