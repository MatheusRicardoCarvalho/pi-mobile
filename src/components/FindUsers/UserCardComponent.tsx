import React from 'react';
import { UserCard, UserImage, UserName, UserGender, UserCity, InitialLetter, ProfileImage } from './UserCardStyles';
import { User } from '../../context/AuthContext';

interface UserCardComponentProps {
  user: User;
}

const UserCardComponent = ({user}: UserCardComponentProps) => (
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
  </UserCard>
);

export default UserCardComponent;
