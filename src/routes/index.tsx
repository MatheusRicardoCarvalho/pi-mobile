import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { PrivateRoutes } from "./PrivateRoutes";
import { AnotherUserProfile } from "../screens/tenantUser/AnoterUserProfile";
import { navigationRef } from "./RootNavigation";
import EditMyProfile from "../screens/tenantUser/EditMyProfile";
import { ChooseTags } from "../screens/tenantUser/ChooseTags";
import { ChatScreen } from "../screens/ChatScreen";
import { FilterModal } from "../screens/tenantUser/Modal/FilterModal";

const Stack = createNativeStackNavigator();

export const AppRouter = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={PrivateRoutes} />
        <Stack.Screen name="UserProfile" component={AnotherUserProfile} />
        <Stack.Screen name="EditMyProfile" component={EditMyProfile} />
        <Stack.Screen name="EditTag" component={ChooseTags} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="FilterModal" component={FilterModal} />
        </Stack.Group>
      </Stack.Navigator>

    </NavigationContainer>
  );
};
