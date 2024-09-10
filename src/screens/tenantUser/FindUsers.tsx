import { useContext, useState } from "react";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import {
  Body,
  Title,
  ButtonTouch,
  StyledText,
  ScrollViewContainer,
  StyledScrollView,
  StyledFlatList,
} from "../../styleds/home";
import { UserCardComponent } from "../../components/FindUsers/UserCardComponent";
import { User } from "../../context/AuthContext";
import { api } from "../../services/api";
import { ContainerFindUser } from "../../styleds/find_users";
import React from "react";
import { FlatList, Text } from "react-native";
import { ButtonText, UserButton } from "../../components/FindUsers/UserCardStyles";
import { navigate } from "../../routes/RootNavigation";
import { FilterUsers } from "../../components/Filter/FilterUsers";
import { DateInput } from "../../components/DateInput";
import { FilterUserContext } from "../../context/FilterUserContext";

export interface ArrayUsers {
  users: User[];
}

export default function FindUsers() {
  const { filters, setFilters } = useContext(FilterUserContext)!;
  const authContext = useContext(AuthContext);
  const [arrayUsers, setArrayUsers] = useState<ArrayUsers | null>(null);
  const route = useRoute();
  const params = route.params || {};

  useFocusEffect(
    React.useCallback(() => {
      initArrayUsers(params);
    }, [])
  );


  async function initArrayUsers(params: any) {
    const data = {
      name: params?.name || "sem nome",
      email: params?.email || "sem email",
      city: params?.city || "",
      gender: params?.gender || "",
      rangerAge: params?.rangeAge || { idadeMax: 100, idadeMin: 0 },
      Ilike: params?.Ilike || false,
      userId: authContext?.user?.id || 0
    }
    console.log("Aqui está os filtros: " + JSON.stringify(filters))
    try {
      console.log("PARAMETROS: "+ JSON.stringify(filters))
      if (filters.applyFilter) {
        const response = await api.post("/users/find", filters);
        const array: any = response.data;
        array.users.forEach((user: { tags: any[] }) => {
          user.tags = user.tags.map(tagObj => tagObj.tag.name);
        });
        array.users.map((user: { name: string; }) => console.log("Usuário: " + user.name + " \n"))

        setArrayUsers({ users: array.users });
      } else {
        const response = await api.get("/users");
        const array = response.data.users;
        setArrayUsers({ users: array });
      }
    } catch (err) {
      console.log("erro ao buscar usuários: " + err);
    }
  }

  const handlesignOut = () => {
    authContext?.signOut();
  };

  function handleFilter() {
    navigate("FilterModal", {})
  }

  return (
    <>
      <Title>Outros Usuários</Title>
      <ContainerFindUser>
        <UserButton onPress={handleFilter}>
          <ButtonText>Definir Filtros</ButtonText>
        </UserButton>
        <ScrollViewContainer>
          <StyledFlatList
            data={arrayUsers?.users}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <UserCardComponent user={item} match={false} />
            )}
          />
        </ScrollViewContainer>
      </ContainerFindUser>
    </>
  );
}
