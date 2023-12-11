import React, { useContext, useEffect, useState } from "react";

import { Body, ButtonTouch, ContainerLogin, Title, StyledText, ContainerForm, Label, Input } from "../styleds/home";
import { AuthContext } from "../context/AuthContext";
import { navigate } from "../routes/RootNavigation";


export default function Login({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext)
    const signed = authContext?.signed

    /*useEffect(() => {
        authContext?.signOut();
        
    }, [])*/

    const handleSingIn = async () => {
        await authContext?.signIn(email, password)
    }
    if (signed) {
        //navigation.navigate('Home', {screen: 'Home'})
        navigate('Home', {})
        return (
            <Title>Indo para o Home</Title>
        );
    } else {
        return (
            <Body>
                <Title>Login</Title>
                <ContainerLogin>
                    <ContainerForm>

                        <Label>Email:</Label>
                        <Input
                            placeholder="Digite seu email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />

                        <Label>password:</Label>
                        <Input
                            placeholder="Digite sua senha"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />
                    </ContainerForm>
                    <ButtonTouch onPress={handleSingIn}><StyledText>Entrar</StyledText></ButtonTouch>
                    <ButtonTouch
                        onPress={() => navigation.navigate('Register')}
                    ><StyledText>Cadastrar</StyledText></ButtonTouch>
                </ContainerLogin>
            </Body>
        )
    }
}