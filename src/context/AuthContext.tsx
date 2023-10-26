import React, { ReactNode, createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { useLinkTo } from "@react-navigation/native";
import { MMKV } from "react-native-mmkv";
import { getData, removeValue, storeData } from "../services/storage";
//import { storage } from "../services/storage";

interface User {
    id: string;
    email: string;
    userType: string;
    name: string
  }
  
  export interface AuthContextType {
    user: User | null;
    signed: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void
  }
  
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  export const AuthContext = createContext<AuthContextType | null>(null);
  
  
  export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const linkTo = useLinkTo();

    useEffect(() => {
      const loadingStoredData = async () => {
        const storageUser =  await getData("@Auth:user");
        const storageToken =  await getData("@Auth:token");
  
        if (storageUser && storageToken) {
           setUser(JSON.parse(storageUser));
        }
      };
      console.log('context')
      loadingStoredData();
    }, []);
  
    const signIn = async (email: string, password: string) => {
      const response = await api.post('/auth', { email, password });
  
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setUser(response.data.user);
        api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        await storeData("@Auth:token", response.data.token);
        await storeData("@Auth:user", JSON.stringify(response.data.user));
        const debug = await getData("@Auth:token");
        console.log("deu certo "+ debug)
      }
    };
    const signOut = () => {
      //const navigation = useNavigation();
      removeValue("@Auth:token")
      removeValue("@Auth:user")
      setUser(null);
      linkTo("/Login")
      //return <Navigate to="/" />;
    };
  
    return (
      <AuthContext.Provider
        value={{
          user,
          signed: !!user,
          signIn,
          signOut
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  