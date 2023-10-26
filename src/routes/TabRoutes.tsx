import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/tenantUser/Home";
import FindUsers from "../screens/tenantUser/FindUsers";
import {Feather} from "@expo/vector-icons"

const {Navigator, Screen} = createBottomTabNavigator()

export function TabRoutes(){
    return(
        <NavigationContainer>
        <Navigator
        screenOptions={{
            tabBarActiveTintColor: '#8743FF',
            tabBarInactiveTintColor: '#CCCCCC',
            tabBarHideOnKeyboard: true,
            headerShown: false
        }}
        >
            <Screen 
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({size, color}) => <Feather name="home" size={size} color={color} />
            }}
            />
            <Screen 
            name="FindUsers"
            component={FindUsers}
            options={{
                tabBarIcon: ({size, color}) => <Feather name="users" size={size} color={color} />
            }}
            />
            <Screen 
            name="FindUsers"
            component={FindUsers}
            options={{
                tabBarIcon: ({size, color}) => <Feather name="users" size={size} color={color} />
            }}
            />
        </Navigator>
    </NavigationContainer>
    )
}