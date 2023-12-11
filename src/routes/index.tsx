import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { PrivateRoutes } from "./PrivateRoutes";
import { AnotherUserProfile } from "../screens/tenantUser/AnoterUserProfile";
import { navigationRef } from "./RootNavigation";
import EditMyProfile from "../screens/tenantUser/EditMyProfile";

const Stack = createNativeStackNavigator();

export const AppRouter = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login" screenOptions={ {headerShown: false}} > 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={PrivateRoutes} />
        <Stack.Screen name="UserProfile" component={AnotherUserProfile} />
        <Stack.Screen name="EditMyProfile" component={EditMyProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
