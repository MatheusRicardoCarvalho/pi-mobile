import React, { useContext, useEffect, useState } from "react";
import {
  Body,
  ButtonTouch,
  ContainerForm,
  ContainerEdit,
  Input,
  Label,
  StyledText,
  Title,
  StyledScrollView,
  StyledImage,
  ScrollViewContainer,
  InputScroll,
} from "../../styleds/home";
import { AuthContext } from "../../context/AuthContext";
import { Alert, ScrollView, View } from "react-native";
import { api } from "../../services/api";
import * as ImagePicker from "expo-image-picker";
import { DateInput } from "../../components/DateInput";
import { RadioButton } from "react-native-paper";
import { RadioGroup } from "../../components/Filter/FilterStyles";
import { RadioView } from "../../styleds/generalStyles";
import { format, parse } from 'date-fns';

export default function EditMyProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [genero, setGenero] = useState("");
  const [cidade, setCidade] = useState("");
  const [foto, setFoto] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const { id, name, email, gender, birthday, city, photo, aboutMe, phone } =
      authContext?.user || {
        id: "erro",
        name: "erro",
        email: "erro",
        gender: "erro",
        birthday: "erro",
        city: "erro",
        photo: "erro",
        aboutMe: "erro",
        phone: "erro",
      };
    setCidade(city);
    setName(name);
    setEmail(email);
    setNascimento(convertToBr(birthday));
    setGenero(gender);
    setFoto(photo);
    setTelefone(phone);
    setAboutMe(aboutMe);
  }, []);

  // INUTILIZADO POR HORA
  const handlePickerImage = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      Alert.alert(
        "Permissão necessária",
        "Permita que sua aplicação acesse as imagens"
      );
    } else {
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: false,
        aspect: [4, 4],
        quality: 1,
      });

      if (canceled) {
        //ToastAndroid.show('Operação cancelada', ToastAndroid.SHORT);
      } else {
        const userId = authContext?.user?.id;
        const filename = assets[0].uri.substring(
          assets[0].uri.lastIndexOf("/") + 1,
          assets[0].uri.length
        );
        const extend = filename.split(".")[1];
        const formData = new FormData();
        formData.append(
          "file",
          JSON.parse(
            JSON.stringify({
              name: filename,
              uri: assets[0].uri,
              type: "image/" + extend,
            })
          )
        );

        try {
          const response = api.post("/photo_profile/" + userId, formData, {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
            },
          });
          const updatedUser = await api.get(`/photo_profile/${userId}`);
          console.log("FOTO: " + updatedUser.data);
          setFoto(updatedUser.data.photo);
        } catch (error) {}
      }
    }
  };

  async function handleSubmit() {
    const id = authContext?.user?.id;
    console.log(nascimento);
    const dataNasc = convertToISO(nascimento);

    const data = {
      id,
      name,
      email,
      phone: telefone,
      birthday: dataNasc,
      gender: genero,
      city: cidade,
      photo: foto,
      aboutMe,
    };
    console.log(data);
    try {
      const response = await api.post("/users/update", data);
      const { id, name, email, gender, birthday, city, photo, phone, aboutMe } =
        response.data.user;
      const newUser = {
        id,
        name,
        email,
        gender,
        birthday,
        city,
        photo,
        aboutMe,
        phone,
      };
      authContext?.updateUser(newUser);
      Alert.alert("Dados atualizados", "", [
        { text: "OK", onPress: () => console.log("Botão OK pressionado") },
      ]);
    } catch (err) {
      console.log(err);
    }
  }

  function convertToBr(isoDate: string): string {
    if (!isoDate) return "";
    try {
      const date = new Date(isoDate);
      return format(date, 'dd/MM/yyyy');
    } catch (error) {
      console.error("Erro ao converter data:", error);
      return "";
    }
  }

  function convertToISO(brDate: string): string {
    if (!brDate) return "";
    try {
      const [day, month, year] = brDate.split('/').map(Number);
      const date = new Date(year, month - 1, day);
      return date.toISOString();
    } catch (error) {
      console.error("Erro ao converter data para ISO:", error);
      return "";
    }
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
                placeholder="Digite seu nome"
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
              <RadioGroup>
                <RadioButton.Group
                  onValueChange={(newValue) => setGenero(newValue)}
                  value={genero}
                >
                  <RadioView>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Label>Masculino</Label>
                    <RadioButton value="masculino" />
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Label>Feminino</Label>
                    <RadioButton value="feminino" />
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Label>Outro</Label>
                    <RadioButton value="Outro" />
                  </View>
                  </RadioView>
                </RadioButton.Group>
              </RadioGroup>
              <Label>Cidade:</Label>
              <InputScroll
                value={cidade}
                onChangeText={setCidade}
                placeholder="Cidade"
              />
              <Label>Foto</Label>

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

              <DateInput
                value={nascimento}
                onChange={(value) => {
                  setNascimento(value);
                }}
                typeInput="datetime"
              />

              <Label>Sobre Mim:</Label>
              <InputScroll
                placeholder="Fale sobre você!"
                value={aboutMe}
                onChangeText={setAboutMe}
              />
            </ContainerForm>
            <ButtonTouch onPress={handleSubmit}>
              <StyledText>Salvar Mudanças</StyledText>
            </ButtonTouch>
          </StyledScrollView>
        </ScrollViewContainer>
      </ContainerEdit>
    </>
  );
}
