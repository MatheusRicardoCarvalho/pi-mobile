import React from 'react';
import { UserCard, UserImage, UserName, UserGender, UserCity, InitialLetter, ProfileImage, ButtonText, UserButton } from './UserCardStyles';
import { User } from '../../context/AuthContext';
import { navigate } from '../../routes/RootNavigation';

export interface UserCardComponentProps {
  user: User;
  match: boolean
}

export const UserCardComponent = ({ user, match }: UserCardComponentProps) => {

  function handleUserButton(){
    navigate('UserProfile', {
      userId: user.id,
      photo: user.photo, 
      name: user.name, 
      gender: user.gender, 
      city: user.city, 
      aboutMe: user.aboutMe
    })
  }

  function handleChatButton(){
    navigate('Chat', {
      userId: user.id,
      photo: user.photo, 
      name: user.name, 
      gender: user.gender, 
      city: user.city, 
      aboutMe: user.aboutMe
    })
  }

  return (
    <UserCard>
      {
        user.photo ?
          <UserImage source={{ uri: user.photo }} />
          :
          (
            <ProfileImage>
              <InitialLetter>{user.name.charAt(0).toUpperCase()}</InitialLetter>
            </ProfileImage>
  
          )
      }
      <UserName>{user.name}</UserName>
      <UserGender>{user.gender}</UserGender>
      <UserCity>{user.city}</UserCity>
      <UserButton onPress={handleUserButton}>
        <ButtonText>Ver mais</ButtonText>
      </UserButton>
      {
        match ? (
          <UserButton onPress={handleChatButton}>
        <ButtonText>Ir Para o Chat</ButtonText>
      </UserButton>
        ) : null
      }
    </UserCard>
  )
};