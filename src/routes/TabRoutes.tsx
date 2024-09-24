import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/tenantUser/Home";
import FindUsers from "../screens/tenantUser/FindUsers";
import { Ionicons } from '@expo/vector-icons';
import { MyUserProfille } from "../screens/tenantUser/MyUserProfile";
import React from "react";

const {Navigator, Screen} = createBottomTabNavigator()

export function TabRoutes(){
    return(
        <Navigator
        screenOptions={{
            tabBarActiveTintColor: '#8743FF',
            tabBarInactiveTintColor: '#313030',
            tabBarHideOnKeyboard: true,
            headerShown: false
        }}
        >
            <Screen 
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color} />
            }}
            />
            <Screen 
            name="FindUsers"
            component={FindUsers}
            options={{
                tabBarIcon: ({size, color}) => <Ionicons name="people" size={size} color={color} />
            }}
            />
            <Screen 
            name="MyProfille"
            component={MyUserProfille}
            options={{
                tabBarIcon: ({size, color}) => <Ionicons name="person" size={size} color={color} />
            }}
            />
        </Navigator>
    )
}