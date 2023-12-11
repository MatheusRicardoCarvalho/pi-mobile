import styled from "styled-components/native";

export const UserCard = styled.View`
  width: 90%;
  align-self: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
`;

export const UserImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const ProfileImage = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: #D5BDFF;
  justify-content: center;
  align-items: center;
`;

export const InitialLetter = styled.Text`
  font-size: 40px; 
  color: #32234D; 
`;

export const UserName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const UserGender = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const UserCity = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const UserButton = styled.TouchableOpacity`
  width: 90%;
  background-color: #32234D;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
`;
