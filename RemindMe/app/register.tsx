import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
import { useDispatch } from "react-redux";
import { registerUser } from "@/store/slices/userSlice";
import { useTheme } from "@/contexts/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/themes";
import { i18n } from "@/contexts/LanguajeContext";

export default function RegisterScreen() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
    const { theme } = useTheme();
    const themeStyles = theme === "dark" ? darkTheme : lightTheme;

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateName = (text: string) => {
    setName(text);
    setErrors((prev) => ({
      ...prev,
      name: text.length < 3 ? "El nombre debe tener al menos 3 caracteres" : "",
    }));
  };

  const validateEmail = (text: string) => {
    setEmail(text);
    setErrors((prev) => ({
      ...prev,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text) ? "" : "Correo no válido",
    }));
  };

  const validatePassword = (text: string) => {
    setPassword(text);
    setErrors((prev) => ({
      ...prev,
      password: text.length < 6 ? "La contraseña debe tener al menos 6 caracteres" : "",
    }));
  };

  const validateConfirmPassword = (text: string) => {
    setConfirmPassword(text);
    setErrors((prev) => ({
      ...prev,
      confirmPassword: text === password ? "" : "Las contraseñas no coinciden",
    }));
  };

  const handleRegister = () => {
    if (name && email && password === confirmPassword) {
      dispatch(registerUser({name, email, password}));
      router.replace("/inicio");
    }
  };

  return (
    <View style={[styles.container, themeStyles.containerInicio]}>
      <Text style={themeStyles.title}>{i18n.t("Register")}</Text>

      <TextInput
        style={[styles.input, errors.name && styles.inputError]}
        placeholder={i18n.t("name")}
        value={name}
        onChangeText={validateName}
      />
      {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

      <TextInput
        style={[styles.input, errors.email && styles.inputError]}
        placeholder={i18n.t("email2")}
        value={email}
        onChangeText={validateEmail}
        keyboardType="email-address"
      />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

      <TextInput
        style={[styles.input, errors.password && styles.inputError]}
        placeholder={i18n.t("Password")}
        value={password}
        onChangeText={validatePassword}
        secureTextEntry
      />
      {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

      <TextInput
        style={[styles.input, errors.confirmPassword && styles.inputError]}
        placeholder={i18n.t("ConfirmPassword")}
        value={confirmPassword}
        onChangeText={validateConfirmPassword}
        secureTextEntry
      />
      {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        // disabled={Object.values(errors).some((error) => error)}
      >
        <Text style={styles.buttonText}>{i18n.t("Register")}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.linkText}>{i18n.t("haveaccount")}</Text>
      </TouchableOpacity>
    </View>
  );
}

// 🔹 Estilos
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { width: "100%", height: 50, borderWidth: 1, borderColor: "#ccc", borderRadius: 10, paddingHorizontal: 15, marginBottom: 5, backgroundColor: "#fff" },
  inputError: { borderColor: "#ff4d4d" },
  errorText: { color: "#ff4d4d", fontSize: 14, marginBottom: 5 },
  button: { backgroundColor: "#1c8adb", padding: 15, borderRadius: 10, width: "100%", alignItems: "center", marginTop: 10 },
  buttonDisabled: { backgroundColor: "#aaa" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  linkText: { marginTop: 10, color: "#007bff", textDecorationLine: "underline" },
});

