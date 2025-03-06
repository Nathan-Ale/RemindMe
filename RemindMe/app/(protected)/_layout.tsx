import { Ionicons } from "@expo/vector-icons";
import {Tabs} from "expo-router";

export default function Layout () {
    return(
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;

                    if (route.name === "inicio") {
                        iconName = focused ? "home" : "home-outline"
                    }else if(route.name === "Reminder"){
                        iconName = focused ? "stopwatch" : "stopwatch-outline"
                    }else if(route.name === "Settings"){
                        iconName = focused ? "settings" : "settings-outline"
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor:"gray"
             })}
        />
    )
}