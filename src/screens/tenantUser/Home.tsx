import React, { useContext, useEffect, useState } from "react";
import { Body, ButtonTouch, ContainerForm, ContainerEdit, Input, Label, StyledText, Title, StyledScrollView, StyledImage, ScrollViewContainer, InputScroll } from "../../styleds/home";
import { AuthContext } from "../../context/AuthContext";
import { Alert, ScrollView } from "react-native";
import { api } from "../../services/api";

export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [genero, setGenero] = useState('');
    const [cidade, setCidade] = useState('');
    const [foto, setFoto] = useState('');
    const authContext = useContext(AuthContext);

    useEffect(() => {
        
        const {id, name, email, gender, birthday, city, photo, phone} = authContext?.user || {id: 'erro', name: 'erro', email: 'erro', gender: 'erro', birthday: 'erro', city: 'erro', photo: 'erro', phone: 'erro'};
        setCidade(city);
        setName(name);
        setEmail(email);
        setNascimento(birthday);
        setGenero(gender);
        setFoto(photo);
        setTelefone(phone);
    }, [])
      
    const handlesignOut = () => {
        authContext?.signOut();

    }

    async function handleSubmit(){
        const id = authContext?.user?.id
        console.log(nascimento)
        const dataNasc = formatDate(nascimento)

        const data = {id, name, email, phone: telefone, birthday: dataNasc,  gender: genero, city: cidade, photo: foto}
        console.log(data)
        try{
            const response = await api.post("/users/update", data)
            const {id, name, email, gender, birthday, city, photo, phone} = response.data.user
            const newUser = {id, name, email, gender, birthday, city, photo, phone}
            authContext?.updateUser(newUser)
            Alert.alert("Dados atualizados", '' , [
                { text: "OK", onPress: () => console.log("Botão OK pressionado") }
            ])
        } catch(err){
            console.log(err);
        }
    }

    const formatDate = (date: string) => {
        const [day, month, year] = date.split("/");
        return new Date(`${year}-${month}-${day}`);
    }

    const formatBRDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Os meses começam do 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
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


                </ContainerForm>
                <ButtonTouch onPress={handleSubmit} ><StyledText>Salvar Mudanças</StyledText></ButtonTouch>

            </StyledScrollView>
                </ScrollViewContainer>
            </ContainerEdit>
            </>
    )
}