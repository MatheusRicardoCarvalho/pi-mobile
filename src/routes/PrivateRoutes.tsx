import React, { useContext } from "react";
import { NavigationContainer, useLinkTo, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context/AuthContext";
import Home from "../screens/tenantUser/Home";
import { Title } from "../styleds/home";


const Stack = createNativeStackNavigator();

export const PrivateRoutes = () => {
  const navigate = useNavigation();
  const authContext = useContext(AuthContext);
  const signed = authContext?.signed;
  const userType = authContext?.user?.userType;

  if (signed) {
    return (
          <Home />
    );
  } else {
    //linkTo('../screens/Login.tsx');
    
    navigate.goBack()
    return (
      <Title>voltando para o login</Title>
  );
  }
};
