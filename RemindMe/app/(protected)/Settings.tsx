import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import { useRouter } from "expo-router"
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/themes";
import { Picker } from "@react-native-picker/picker";
import { i18n, useLanguage } from "@/contexts/LanguajeContext";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import { setUsers } from "@/store/slices/usersSlice";
import { RootState } from "@/store/store";
import { BASE_URL } from "@/config/api";

export default function SettingsScreen(){
    const {theme, toggleTheme} = useTheme();
    const { language, changeLanguage } = useLanguage();
    const styles = theme === "dark" ? darkTheme : lightTheme;
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users);

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const response = await axios.get("http://192.168.1.130:5088/api/usuarios")
                dispatch (setUsers(response.data))
            }
            catch(err: any){
                console.log("Error de axios ",err.message)
                console.log("Error completo ", err.toJSON?.())
            }
        };
    fetchUsers();
    }, [dispatch]);


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
            
            <View>
                <Text style={styles.titleusers}>Usuarios Registrados</Text>
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.userCard}>
                            <Text style={styles.userText}>{item.nombre}</Text>
                            <Text style={styles.userText}>{item.correo}</Text>
                        </View>
                    )}
                    style={{flexGrow: 0, maxHeight: 200}}

                />
            </View>
        </View>
    )
}
