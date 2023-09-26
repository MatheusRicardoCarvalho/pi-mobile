import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { PrivateRoutes } from "./PrivateRoutes";

const Stack = createNativeStackNavigator();

export const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={PrivateRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
