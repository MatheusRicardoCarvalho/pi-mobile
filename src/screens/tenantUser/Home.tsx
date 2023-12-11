import React, { useContext, useEffect, useState } from "react";
import { Body, ButtonTouch, ContainerForm, ContainerEdit, Input, Label, StyledText, Title, StyledScrollView, StyledImage, ScrollViewContainer, InputScroll } from "../../styleds/home";
import { AuthContext } from "../../context/AuthContext";
import { Alert, ScrollView } from "react-native";
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
            setMatchedUsers(response.data.matchedUsers)
        } catch (err) {
            console.log()
        }
    }

    return (
        <>
            <Title>Meus Matchs</Title>
            
            
            <ContainerMatch>
                <ButtonTouch onPress={handlesignOut} ><StyledText>Sair</StyledText></ButtonTouch>

                <ScrollViewContainer>
                    <StyledScrollView>
                        {
                            matchedUsers?.map((user, index) => {
                                return <UserCardComponent key={index} user={user} />
                            })
                        }
                    </StyledScrollView>
                </ScrollViewContainer>
            </ContainerMatch>
        </>
    )
}