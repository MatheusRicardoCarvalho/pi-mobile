import React, { useContext } from "react";
import { NavigationContainer, useLinkTo } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context/AuthContext";
import Home from "../screens/tenantUser/Home";


const Stack = createNativeStackNavigator();

export const PrivateRoutes = () => {
    const linkTo = useLinkTo();
  const authContext = useContext(AuthContext);
  const signed = authContext?.signed;
  const userType = authContext?.user?.userType;

  if (signed) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    linkTo('/');
  }
};
