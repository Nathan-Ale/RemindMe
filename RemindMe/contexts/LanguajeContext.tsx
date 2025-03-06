import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18n } from "i18n-js"
import { createContext, useContext, useEffect, useState } from "react";

const translations = {
    en: {
        Welcome: "Welcome",
        email: "Email",
        Login : "Login",
        Reminders: "My Reminders",
        Pending: "No pending reminders...",
        Logout: "Logout",
        CreateReminder: "Create Reminder",
    },
    es: {
        Welcome: "Bienvenido",
        email: "Correo Electrónico",
        Login : "Ingresar",
        Reminders: "Mis Recordatorios",
        Pending: "No hay Recordatorios...",
        Logout: "Cerrar Sesión",
        CreateReminder: "Crear Recordatorio",
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