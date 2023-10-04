import React, { useContext } from "react";
import { NavigationContainer, useLinkTo } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context/AuthContext";
import Home from "../screens/tenantUser/Home";
import { Title } from "../styleds/home";


const Stack = createNativeStackNavigator();

export const PrivateRoutes = () => {
  const linkTo = useLinkTo();
  const authContext = useContext(AuthContext);
  const signed = authContext?.signed;
  const userType = authContext?.user?.userType;

  if (signed) {
    return (
          <Stack.Screen name="Home" component={Home} />
    );
  } else {
    linkTo('../screens/Login.tsx');
    return (
      <Title>Aguarde</Title>
  );
  }
};
