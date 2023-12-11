import React, { useContext } from "react";
import { NavigationContainer, useLinkTo, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context/AuthContext";
import Home from "../screens/tenantUser/Home";
import { Title } from "../styleds/home";
import { TabRoutes } from "./TabRoutes";
import FindUsers from "../screens/tenantUser/FindUsers";
import { AnotherUserProfile } from "../screens/tenantUser/AnoterUserProfile";
import { navigate } from "./RootNavigation";

const Stack = createNativeStackNavigator();

export const PrivateRoutes = () => {
  //const navigate = useNavigation();
  const authContext = useContext(AuthContext);
  const signed = authContext?.signed;
  //const userType = authContext?.user?.userType;

  if (signed) {
    return (
        <TabRoutes />
    );
  } else {
    
    navigate("Login", {})
    return (
      <Title>voltando para o login</Title>
  );
  }
};

/* 
<AnotherUserProfille 
          photo="https://static.vecteezy.com/ti/fotos-gratis/t2/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg"
          name="Jorginho"
          gender="masculino"
          city="Salgueiro"
          aboutMe="Sobre Mim deste usuário..."
        />
*/
