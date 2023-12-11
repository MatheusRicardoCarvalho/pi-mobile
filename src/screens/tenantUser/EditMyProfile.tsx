import React, { useContext, useEffect, useState } from "react";
import { Body, ButtonTouch, ContainerForm, ContainerEdit, Input, Label, StyledText, Title, StyledScrollView, StyledImage, ScrollViewContainer, InputScroll } from "../../styleds/home";
import { AuthContext } from "../../context/AuthContext";
import { Alert, ScrollView } from "react-native";
import { api } from "../../services/api";

export default function EditMyProfile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [genero, setGenero] = useState('');
    const [cidade, setCidade] = useState('');
    const [foto, setFoto] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const authContext = useContext(AuthContext);

    useEffect(() => {

        const { id, name, email, gender, birthday, city, photo, aboutMe, phone } = authContext?.user || { id: 'erro', name: 'erro', email: 'erro', gender: 'erro', birthday: 'erro', city: 'erro', photo: 'erro', aboutMe: 'erro', phone: 'erro' };
        setCidade(city);
        setName(name);
        setEmail(email);
        setNascimento(convertToBr(birthday));
        setGenero(gender);
        setFoto(photo);
        setTelefone(phone);
        setAboutMe(aboutMe)
    }, [])

    

    async function handleSubmit() {
        const id = authContext?.user?.id
        console.log(nascimento)
        const dataNasc = convertToISO(nascimento)

        const data = { id, name, email, phone: telefone, birthday: dataNasc, gender: genero, city: cidade, photo: foto, aboutMe }
        console.log(data)
        try {
            const response = await api.post("/users/update", data)
            const { id, name, email, gender, birthday, city, photo, phone, aboutMe } = response.data.user
            const newUser = { id, name, email, gender, birthday, city, photo, aboutMe, phone }
            authContext?.updateUser(newUser)
            Alert.alert("Dados atualizados", '', [
                { text: "OK", onPress: () => console.log("Botão OK pressionado") }
            ])
        } catch (err) {
            console.log(err);
        }
    }

    function convertToBr(isoDate: string): string {
        let date = new Date(isoDate);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    
    function convertToISO(brDate: string): string {
        let parts = brDate.split('/');
        let date = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
        return date.toISOString();
    }

    return (
        <>
            <Title>Editar</Title>

            <ContainerEdit>
                <ScrollViewContainer>
                    <StyledScrollView>
                        <ContainerForm>
                            <Label>Nome:</Label>
                            <InputScroll
                                placeholder="Digite seu name"
                                value={name}
                                onChangeText={setName}
                            />

                            <Label>Email:</Label>
                            <InputScroll
                                placeholder="Digite seu email"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                            />
                            <Label>Gênero:</Label>
                            <InputScroll
                                value={genero}
                                onChangeText={setGenero}
                                placeholder="Gênero"
                            />
                            <Label>Cidade:</Label>
                            <InputScroll
                                value={cidade}
                                onChangeText={setCidade}
                                placeholder="Cidade"
                            />
                            <Label>URL da Foto</Label>
                            <InputScroll
                                value={foto}
                                onChangeText={setFoto}
                                placeholder="URL da Foto"
                            />
                            {foto ? <StyledImage source={{ uri: foto }} /> : null}
                            <Label>Telefone:</Label>
                            <InputScroll
                                placeholder="Digite seu telefone"
                                value={telefone}
                                onChangeText={setTelefone}
                                keyboardType="phone-pad"
                            />

                            <Label>Data de Nascimento:</Label>
                            <InputScroll
                                placeholder="Digite sua data de nascimento"
                                value={nascimento}
                                onChangeText={setNascimento}
                            />

                            <Label>Sobre Mim:</Label>
                            <InputScroll
                                placeholder="Fale sobre você!"
                                value={aboutMe}
                                onChangeText={setAboutMe}
                            />

                        </ContainerForm>
                        <ButtonTouch onPress={handleSubmit} ><StyledText>Salvar Mudanças</StyledText></ButtonTouch>

                    </StyledScrollView>
                </ScrollViewContainer>

            </ContainerEdit>
        </>
    )
}