import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Body, Title, ButtonTouch, StyledText, ScrollViewContainer, StyledScrollView } from "../../styleds/home";
import UserCardComponent from "../../components/FindUsers/UserCardComponent";
import { User } from "../../context/AuthContext";
import { api } from "../../services/api";
import { ContainerFindUser } from "../../styleds/find_users";

export interface ArrayUsers {
    users: User[]
}

export default function FindUsers() {
    const authContext = useContext(AuthContext);
    const [arrayUsers, setArrayUsers] = useState<ArrayUsers | null>(null)

    useLayoutEffect(() => {
        initArrayUsers()
    }, [])

    async function initArrayUsers() {
        try {
            const response = await api.get("/users")
            const array = response.data.users
            setArrayUsers({ users: array });
        } catch (err) {
            console.log("erro ao buscar usuários: " + err)
        }
    }
    




    const handlesignOut = () => {
        authContext?.signOut();

    }
    return (
        <>
            <Title>Outros Usuários</Title>
            <ContainerFindUser>
                <ScrollViewContainer>
                    <StyledScrollView>
                        {
                            arrayUsers?.users.map((user, index) => {
                                return <UserCardComponent key={index} user={user} />
                            })
                        }
                    </StyledScrollView>
                </ScrollViewContainer>
            </ContainerFindUser>
        </>
    )
}