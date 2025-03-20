import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/themes";
import { i18n } from "@/contexts/LanguajeContext";

export default function LoginScreen(){
const [email, setEmail] = useState("");
const router = useRouter();
const {login, isAllowed} = useAuth();
const {theme} = useTheme();
const themeStyles = theme === "dark" ? darkTheme : lightTheme;


useEffect(() => {
  if (isAllowed) {
      router.replace("../(protected)/inicio");
  }
}, [isAllowed]);

const handleLogin = () => {
  login(email);
};

    return(
        <View style={[themeStyles.container, styles.container]}>
            <Image
            source={require("../assets/images/user.png")}
            style={themeStyles.avatar}
            />
            <Text style={themeStyles.title}>{i18n.t("Welcome")}</Text>

            <TextInput
            style={styles.input}
            placeholder= {i18n.t("email")}
            placeholderTextColor="#777"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
        />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={themeStyles.buttonText}>{i18n.t("Login")}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/register")}>
              <Text style={styles.linkText}>{i18n.t("SigIn")}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        // backgroundColor: "#F5F7FA",
      },
      avatar: {
        height: 110,
        width: 110,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "black",
        marginBottom: 15,
      },
        title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#2D2E32",
        textAlign: "center",
      },
      input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: "white",
        marginBottom: 15,
        fontSize: 16,
      },
      button: {
        backgroundColor: "#1c8adb",
        padding: 15,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
      },
      buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
      },
      googleIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
      },
      linkText: {
        marginTop: 10,
        color: "#007bff",
        textDecorationLine: "underline"
      },
    });