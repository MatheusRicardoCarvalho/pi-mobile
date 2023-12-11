import React, { useContext, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Container, Name, Gender, City, AboutMe, LikeContainer, TextLikeCount, LikeButton } from '../../styleds/AnotherUserProfille';
import { Title } from '../../styleds/home';
import { UserImage, InitialLetter, ProfileImage } from '../../components/FindUsers/UserCardStyles';
import { AntDesign } from '@expo/vector-icons';
import { api } from '../../services/api';
import { AuthContext } from '../../context/AuthContext';

export interface propsUserProfile {
  userId: number;
  photo: string;
  name: string;
  gender: string;
  city: string;
  aboutMe: string
}

export function AnotherUserProfile() {
  const route = useRoute();
  const { userId, photo, name, gender, city, aboutMe } = route.params as propsUserProfile;
  const [liked, setLiked] = useState(false);
  const [qtdLikes, setQtdLikes] = useState(0);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    setupLiked();
    setupCountLikes();
  }, [])

  async function setupLiked() {
    const data = { likerId: authContext?.user?.id, likedUserId: userId };
    try {
      const response = await api.post('/liked', data);
      if (response.data.like) {
        console.log("dados: " + JSON.stringify(response.data.like))
        setLiked(true);
      } else {
        console.log("Não curtiu")
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function setupCountLikes(){
    const data = {userId};

    try{
      const response = await api.post('/countLikes', data);
      if (response.status === 200){
        setQtdLikes(response.data.likesCount);
      }
    } catch (err) {
      console.log(err);
    }

  }

  async function handleLike() {
    const data = { likerId: authContext?.user?.id, likedUserId: userId };
    try {
      if (liked) {
        const response = await api.delete('/like', { data });
        if (response.status === 200) {
          setLiked(false);
          setQtdLikes(previousValue => previousValue -1);
        }
      } else {
        const response = await api.post('/like', data);
        if (response.data.like) {
          setLiked(true);
          setQtdLikes(previousValue => previousValue +1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }  


  return (
    <>
      <Title>Perfil</Title>
      <Container>
        {
          photo ?
            <UserImage source={{ uri: photo }} />
            :
            (
              <ProfileImage>
                <InitialLetter>{name.charAt(0).toUpperCase()}</InitialLetter>
              </ProfileImage>

            )
        }
        <LikeContainer>
          <LikeButton onPress={handleLike}>
            {
              liked ?
                <AntDesign name="like1" size={24} color="#ffd" />
                :
                <AntDesign name="like2" size={24} color="#ffd" />

            }
          </LikeButton>

          <TextLikeCount>{qtdLikes}</TextLikeCount>
        </LikeContainer>
        <Name>{name}</Name>
        <Gender>{gender}</Gender>
        <City>{city}</City>
        <AboutMe>{aboutMe}</AboutMe>
      </Container>
    </>
  )
}
