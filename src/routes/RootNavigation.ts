import { NavigationContainerRef } from "@react-navigation/native";
import React from "react";

export type RootStackParamList = {
    Home: object;
    FindUser: object;
    Notification: object
  };

export const navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();

export function navigate(name: string, params: object) {
    navigationRef.current?.navigate(name, params);
  }
  