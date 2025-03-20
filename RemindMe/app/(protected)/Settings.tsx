import { View, Text, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/themes";
import { Picker } from "@react-native-picker/picker";
import { i18n, useLanguage } from "@/contexts/LanguajeContext";

export default function SettingsScreen(){
    const {theme, toggleTheme} = useTheme();
    const { language, changeLanguage } = useLanguage();
    const styles = theme === "dark" ? darkTheme : lightTheme;

    return(
        <View style={styles.container}>
            <Text style={styles.text}> 
            {i18n.t("CurrentTheme")}
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={toggleTheme}>
                <Text
                style={styles.buttonText}
                >{i18n.t("ChangeTheme")}</Text>
            </TouchableOpacity>

            <Text style={styles.text}>
                {i18n.t("CurrentLanguaje")}{language}
            </Text>

            <Picker
                selectedValue={language}
                style={{ height: 70, width: 200 }}
                mode="dropdown"
                dropdownIconColor={theme === "dark" ? "white" : "black"}
                onValueChange={(itemValue) => changeLanguage(itemValue)}>
                    <Picker.Item style={styles.Label} label={i18n.t("Languajeen")} value="en" />
                    <Picker.Item style={styles.Label} label={i18n.t("Languajees")} value="es" />
            </Picker>
        </View>
    )
}