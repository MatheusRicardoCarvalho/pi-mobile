import { useContext, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
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
import { FlatList, Modal, Text } from "react-native";
import { ButtonText, UserButton } from "../../components/FindUsers/UserCardStyles";
import { navigate } from "../../routes/RootNavigation";
import { FilterUsers } from "../../components/Filter/FilterUsers";
import { DateInput } from "../../components/DateInput";

export interface ArrayUsers {
  users: User[];
}

export default function FindUsers() {
  const authContext = useContext(AuthContext);
  const [arrayUsers, setArrayUsers] = useState<ArrayUsers | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      initArrayUsers();
    }, [])
  );

  async function initArrayUsers() {
    try {
      const response = await api.get("/users");
      const array = response.data.users;
      setArrayUsers({ users: array });
    } catch (err) {
      console.log("erro ao buscar usuários: " + err);
    }
  }

  const handlesignOut = () => {
    authContext?.signOut();
  };

  function handleFilter() {
    //navigate("FilterModal", {})
    setModalVisible(!modalVisible);
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
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <FilterUsers />
        

        </Modal>
      </ContainerFindUser>
    </>
  );
}
