import styled from "styled-components/native";

export const Body = styled.View`
display: flex;
height: 100%;
flex-direction: column;
justify-content: flex-end;
align-items: center;
row-gap: 24px;
background-color:  #ccc;
`
export const Title = styled.Text`
color: rgb(63 63 70);
font-size: 32px;
font-weight: bold;
text-align: center;
`

export const ContainerLogin = styled.View`
display: flex;
height: 82%;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 40px 40px 0px 0px;
background-color: #1A0D30;
row-gap: 8px;
`
export const ButtonTouch = styled.TouchableOpacity`
width: 50%;
  padding: 8px 22px;
  border-radius: 8px;
  background-color: #442180;
`
export const StyledText = styled.Text`
color: #fff;
font-size: 18px;
font-weight: bold;
text-align: center;
`

export const ContainerForm = styled.View`
height: 70%;
width: 80%;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #fff;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 8%;
  min-height: 32px;
  max-height: 44px;
  color: #fff;
  border-color: gray;
  border-radius: 8px;
  border-width: 1px;
  margin-bottom: 4%;
  padding: 0 8px;
`;

