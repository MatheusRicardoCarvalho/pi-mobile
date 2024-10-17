import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/tenantUser/Home";
import FindUsers from "../screens/tenantUser/FindUsers";
import { MyUserProfille } from "../screens/tenantUser/MyUserProfile";
import React from "react";
import { Text } from "react-native";
//import { House, User, Users } from "phosphor-react-native";
import { Feather } from "@expo/vector-icons";

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
                tabBarIcon: ({size, color}) => {
                    return <Feather name="home" size={size} color={color} />
                }
            }}
            />
            <Screen 
            name="FindUsers"
            component={FindUsers}
            options={{
                tabBarIcon: ({size, color}) => {
                    return <Feather name="search" size={size} color={color} />
                }
            }}
            />
            <Screen 
            name="MyProfille"
            component={MyUserProfille}
            options={{
                tabBarIcon: ({size, color}) => {
                    return <Feather name="user" size={size} color={color} />
                }
            }}
            />
        </Navigator>
    )
}