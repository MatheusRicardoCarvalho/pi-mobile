import React, { useContext, useEffect, useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import {
  Container,
  ProfileImage,
  Name,
  Gender,
  City,
  AboutMe,
} from "../../styleds/AnotherUserProfille";
import { ButtonTouch, StyledText, Title } from "../../styleds/home";
import { AuthContext } from "../../context/AuthContext";
import { navigate } from "../../routes/RootNavigation";
import { api } from "../../services/api";
import {TagText, TagsContainer} from "../../styleds/MyUserProfile"
import { Tag } from "../../services/apiClient";

export interface propsUserProfille {
  userId: number
  photo: string;
  name: string;
  gender: string;
  city: string;
  aboutMe: string;
}

export function MyUserProfille() {
  const [myTags, setMyTags] = useState<Tag[]>([]);
  const authContext = useContext(AuthContext);
  const myProfile = {
    userId: authContext?.user?.id,
    photo: authContext?.user?.photo,
    name: authContext?.user?.name,
    gender: authContext?.user?.gender,
    city: authContext?.user?.city,
    aboutMe: authContext?.user?.aboutMe,
  };
  const { photo, name, gender, city, aboutMe } = myProfile;

  function handleEditar() {
    navigate("EditMyProfile", {});
  }

  function handleEditarTags(){
    navigate("EditTag", {});
  }

  const getTags = useCallback(async () => {
    try {
      const data = { userId: myProfile.userId }
      const responseMyTags: Tag[] = (await api.post("/user/tags", data)).data.tags;
      setMyTags(responseMyTags);
      console.log(responseMyTags);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  }, [myProfile.userId]);

  useFocusEffect(
    useCallback(() => {
      getTags();
    }, [getTags])
  );

  return (
    <>
      <Title>Meu Perfil</Title>
      <Container>
        <ProfileImage source={{ uri: photo }} />
        <Name>{name}</Name>
        <Gender>{gender}</Gender>
        <City>{city}</City>
        <AboutMe>{aboutMe}</AboutMe>
        {myTags ? (
          <TagsContainer>
            {myTags.map((tag, index) => (
                <TagText key={index}>{tag.name}</TagText>
            ))}
          </TagsContainer>
        ) : null}
        
        <ButtonTouch onPress={handleEditar}>
          <StyledText>Editar</StyledText>
        </ButtonTouch>
        <ButtonTouch onPress={handleEditarTags}>
          <StyledText>Editar Tags</StyledText>
        </ButtonTouch>
        
      </Container>
    </>
  );
}
