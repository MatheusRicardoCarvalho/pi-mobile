import styled from "styled-components/native";
import { colorPallete } from "../../styleds/colorPallete";

export const UserCard = styled.View`
  width: 90%;
  align-self: center;
  background-color: ${colorPallete.background};
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
  background-color: ${colorPallete.subtleAccent2};
  justify-content: center;
  align-items: center;
`;

export const InitialLetter = styled.Text`
  font-size: 40px; 
  color: ${colorPallete.btn}; 
`;

export const UserName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colorPallete.textLight};
`;

export const UserGender = styled.Text`
  font-size: 16px;
  color: ${colorPallete.greyLight};
`;

export const UserCity = styled.Text`
  font-size: 16px;
  color: ${colorPallete.greyLight};
`;

export const UserButton = styled.TouchableOpacity`
  width: 90%;
  background-color: ${colorPallete.btn};
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: ${colorPallete.textWhite};
`;

export const TagsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const Tag = styled.Text`
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 12px;
  color: #333;
`;
