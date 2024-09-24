import React, { useContext, useEffect, useState } from "react";
import { Body, ButtonTouch, ContainerForm, ContainerEdit, Input, Label, StyledText, Title, StyledScrollView, StyledImage, ScrollViewContainer, InputScroll } from "../../styleds/home";
import { AuthContext, User } from "../../context/AuthContext";
import { Alert, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { api } from "../../services/api";
import { ContainerMatch } from "../../styleds/Matchs";
import { useFocusEffect } from "@react-navigation/native";
import { UserCardComponent } from "../../components/FindUsers/UserCardComponent";

export default function Home() {
    const authContext = useContext(AuthContext);
    const [matchedUsers, setMatchedUsers] = useState([]);

    function handlesignOut() {
        authContext?.signOut();
    }

    useFocusEffect(
        React.useCallback(() => {
            setupMatchs()
        }, [])
    )

    async function setupMatchs(){
        const data = {userId: authContext?.user?.id}
        try{
            const response = await api.post('/findMatchs', data)
            const filteredMatchedUsers = response.data.matchedUsers.filter(
                (user: User) => user.id !== authContext?.user?.id
            );
            setMatchedUsers(filteredMatchedUsers)
        } catch (err) {
            console.log("Erro ao buscar matches:", err)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Title>Meus Matchs</Title>
            
            <ContainerMatch>
                <ButtonTouch onPress={handlesignOut} ><StyledText>Sair</StyledText></ButtonTouch>

                <ScrollViewContainer>
                    <StyledScrollView>
                        {
                            matchedUsers?.map((user, index) => {
                                return <UserCardComponent key={index} user={user} match={true}/>
                            })
                        }
                    </StyledScrollView>
                </ScrollViewContainer>
            </ContainerMatch>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});