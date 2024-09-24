import { useContext, useState, useEffect } from "react";
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
import { FlatList, Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { ButtonText, UserButton } from "../../components/FindUsers/UserCardStyles";
import { navigate } from "../../routes/RootNavigation";
import { FilterUsers } from "../../components/Filter/FilterUsers";
import { DateInput } from "../../components/DateInput";
import { FilterUserContext } from "../../context/FilterUserContext";
import { Ionicons } from "@expo/vector-icons";

export interface ArrayUsers {
  users: User[];
}

export default function FindUsers() {
  const { filters, setFilters } = useContext(FilterUserContext)!;
  const authContext = useContext(AuthContext);
  const [arrayUsers, setArrayUsers] = useState<ArrayUsers | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<ArrayUsers | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const route = useRoute();
  const params = route.params || {};

  useFocusEffect(
    React.useCallback(() => {
      initArrayUsers();
    }, [filters])
  );

  useEffect(() => {
    if (arrayUsers) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = {
        users: arrayUsers.users.filter(user => 
          user.name.toLowerCase().includes(lowercasedQuery)
        )
      };
      setFilteredUsers(filtered);
    }
  }, [searchQuery, arrayUsers]);

  async function initArrayUsers() {
    try {
      console.log("PARAMETROS: "+ JSON.stringify(filters))
      const loggedUserId = authContext?.user?.id;
      
      if (filters.applyFilter) {
        const data = { ...filters , tags: filters.tags.map(tag => tag.name) };
        console.log("PARAMETROS ENVIADOS: "+ JSON.stringify(data))
        const response = await api.post("/users/find", data);
        const filteredUsers = response.data.users.filter((user: User) => user.id !== loggedUserId);
        
        filteredUsers.forEach((user: { tags: any[] }) => {
          user.tags = user.tags.map(tagObj => tagObj.tag.name);
        });
        
        setArrayUsers({ users: filteredUsers });
      } else {
        const response = await api.get("/users");
        const filteredUsers = response.data.users.filter((user: User) => user.id !== loggedUserId);
        
        setArrayUsers({ users: filteredUsers });
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
        <View style={styles.searchAndFilterContainer}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar por nome"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity onPress={handleFilter} style={styles.filterButton}>
            <Ionicons name="filter" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollViewContainer>
          <StyledFlatList
            data={filteredUsers?.users || arrayUsers?.users}
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

const styles = StyleSheet.create({
  searchAndFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  filterButton: {
    padding: 5,
  },
});
