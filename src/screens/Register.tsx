import React, { useContext, useState } from "react";
import { Body, ButtonTouch, ContainerLogin, Title, StyledText, ContainerForm, Label, Input } from "../styleds/home";
import { api } from "../services/api";
import { useLinkTo } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { validDatNasc, validTel } from "../utils/validations";
import { DateInput } from "../components/DateInput";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [password, setPassword] = useState('');
    const linkTo = useLinkTo();
    const authContext = useContext(AuthContext)


    const handleSubmit = async () => {
        const canRegister = (validTel(telefone) && validDatNasc(nascimento))
        try{
            if (!canRegister) throw new Error("Campos inválidos !");
            
            const data = { name, email, password, userType: "tenantUser", telefone, nascimento }

            const response = await api.post('/users/create', data)
            console.log(response.data)
            await authContext?.signIn(email, password)

            linkTo("/Home")
        }catch(err){
            console.log(err);
        }
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
                        inputMode="email"
                    />

                    <Label>Telefone:</Label>
                    <Input
                        placeholder="Digite seu telefone"
                        value={telefone}
                        onChangeText={setTelefone}
                        keyboardType="phone-pad"
                        inputMode="tel"
                    />

                    <Label>Data de Nascimento:</Label>
                    <DateInput value={nascimento} onChange={setNascimento} typeInput="datetime"/>

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
