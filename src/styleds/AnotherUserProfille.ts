import styled from 'styled-components/native';
import { ContainerEdit } from './home';

export const Container = styled(ContainerEdit)`
  flex: 1;
  justify-content: flex-start;
  padding: 10px;
  background-color: #1A0D30;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Name = styled.Text`
  font-size: 40px;
  color: #ffd;
`;

export const Gender = styled.Text`
  font-size: 16px;
  color: #ffd;
`;

export const City = styled.Text`
  font-size: 16px;
  color: #ffd;
`;

export const AboutMe = styled.Text`
  font-size: 14px;
  color: #ffd;
`;

export const LikeContainer = styled.View`
  display: flex;
  margin-top: 16px;
  flex-direction: row;
  width: 100%;
  column-gap: 8px;
  align-items: center;
  justify-content: center;
`
export const TextLikeCount = styled.Text`
  font-size: 14px;
  color: #ffd;
`

export const LikeButton = styled.TouchableOpacity`

`