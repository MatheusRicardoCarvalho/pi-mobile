import React, { useState } from "react";
import { Body, ButtonTouch, ContainerLogin, Title, StyledText, ContainerForm, Label, Input } from "../styleds/home";
import { api } from "../services/api";
import { useLinkTo } from "@react-navigation/native";
import axios from "axios";

export default function Register({navigation}: any) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [password, setPassword] = useState('');
    const linkTo = useLinkTo();

    const handleSubmit = async () => {
        const data = { name, email, password, userType: "tenantUser" }
        console.log("datazin antes: " + name + email + password)
        try{

            const response = await api.post('/users/create', data)
            //const response = await axios.post('http://localhost:3333/users', data)
            console.log(response.data)
            linkTo("/tenantUser/Home.tsx")
        }catch(err){
            console.log(err);
        }
        //navigation.navigate('/');
    }
    return (
        <Body>
            <Title>Login</Title>
            <ContainerLogin>
                <ContainerForm>
                    <Label>Nome:</Label>
                    <Input
                        placeholder="Digite seu name"
                        value={name}
                        onChangeText={setName}
                    />

                    <Label>Email:</Label>
                    <Input
                        placeholder="Digite seu email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <Label>Telefone:</Label>
                    <Input
                        placeholder="Digite seu telefone"
                        value={telefone}
                        onChangeText={setTelefone}
                        keyboardType="phone-pad"
                    />

                    <Label>Data de Nascimento:</Label>
                    <Input
                        placeholder="Digite sua data de nascimento"
                        value={nascimento}
                        onChangeText={setNascimento}
                    />

                    <Label>password:</Label>
                    <Input
                        placeholder="Digite sua senha"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </ContainerForm>
                <ButtonTouch onPress={handleSubmit} ><StyledText>Cadastrar</StyledText></ButtonTouch>

            </ContainerLogin>
        </Body>
    )
}
