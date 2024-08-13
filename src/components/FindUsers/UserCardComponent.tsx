import React, { useEffect, useState } from 'react';
import { UserCard, UserImage, UserName, UserGender, UserCity, InitialLetter, ProfileImage, ButtonText, UserButton, TagsContainer, Tag } from './UserCardStyles';
import { User } from '../../context/AuthContext';
import { navigate } from '../../routes/RootNavigation';
import { api } from '../../services/api';
import { getUserTags } from '../../services/apiClient';

export interface UserCardComponentProps {
  user: User;
  match: boolean
}

export const UserCardComponent = ({ user, match }: UserCardComponentProps) => {
  const [tags, setTags] = useState<string[]>([])

  function handleUserButton(){
    navigate('UserProfile', {
      userId: user.id,
      photo: user.photo, 
      name: user.name, 
      gender: user.gender, 
      city: user.city, 
      aboutMe: user.aboutMe,
      tags: user.tags
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

  useEffect(()=> {
    handleUserTags()
  },[])

  async function handleUserTags(){
    const response = await getUserTags(user.id)
    const tagsUser = response.map(tag => tag.name)
    setTags(tagsUser)
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
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>
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