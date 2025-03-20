import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18n } from "i18n-js"
import { createContext, useContext, useEffect, useState } from "react";

const translations = {
    en: {
        Register:"Register",
        Welcome: "Welcome",
        email: "Email",
        Login : "Login",
        Reminders: "My Reminders",
        Pending: "No pending reminders...",
        Logout: "Logout",
        CreateReminder: "Create Reminder",
        CurrentTheme: "Current Theme: Light | Dark",
        ChangeTheme: "Change Theme",
        CurrentLanguaje: "Current Languaje: ",
        Languajees: "Spanish",
        Languajeen: "English",
        SigIn: "Don't have an account? Sign in!",
        Title: "Title",
        Description: "Description",
        SelectDT: "Select Date and Time",
        SaveReminder: "Save Reminder",
        name: "Full name",
        email2: "Email",
        Password:"Password",
        ConfirmPassword:"Confirm password",
        haveaccount:"Have an account already? Login!"
    },
    es: {
        Register:"Registro",
        Welcome: "Bienvenido",
        email: "Correo Electrónico",
        Login : "Ingresar",
        Reminders: "Mis Recordatorios",
        Pending: "No hay Recordatorios...",
        Logout: "Cerrar Sesión",
        CreateReminder: "Crear Recordatorio",
        CurrentTheme: "Modo Actual: Claro | Oscuro",
        ChangeTheme: "Cambiar Tema",
        CurrentLanguaje: "Idioma Actual: ",
        Languajees: "Español",
        Languajeen: "Inglés",
        SigIn: "¿No tienes una cuenta? ¡Regístrate!",
        Title: "Título",
        Description: "Descripción",
        SelectDT:"Seleccionar Fecha y Hora",
        SaveReminder:"Guardar Recordatorio",
        name: "Nombre completo",
        email2: "Correo electrónico",
        Password:"Contraseña",
        ConfirmPassword:"Confirmar Contraseña",
        haveaccount:"¿Ya tienes cuenta? Iniciar sesión!"
    },
}

const i18n = new I18n(translations);
// i18n.locale = "es";
i18n.defaultLocale = "en";
i18n.enableFallback = true;


type Language = "en" | "es";

interface LanguageContextProps {
    language: Language;
    changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
    return context;
}

export const LanguageProvider=({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>("en");
    useEffect(() => {

        const loadLanguage = async () => {
            const storedLanguage = await AsyncStorage.getItem("language");
            if (storedLanguage) {
                setLanguage(storedLanguage as Language);
                i18n.locale = storedLanguage;
            }else{
                setLanguage(storedLanguage as Language);
                i18n.locale = i18n.defaultLocale;
            }
        };
        loadLanguage();

    }, []);

    const changeLanguage = async (lang: Language) => {
        setLanguage(lang);
        i18n.locale = lang;
        await AsyncStorage.setItem("language", lang);
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )

}
export { i18n };