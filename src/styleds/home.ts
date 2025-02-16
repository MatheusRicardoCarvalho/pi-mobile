import { FlatList } from "react-native";
import styled from "styled-components/native";
import { colorPallete } from "./colorPallete";

export const Body = styled.View`
display: flex;
height: 100%;
flex-direction: column;
justify-content: flex-end;
align-items: center;
row-gap: 24px;
background-color:  ${colorPallete.background};
`
export const Title = styled.Text`
color: ${colorPallete.text};
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
background-color: ${colorPallete.background2};
row-gap: 8px;
`

export const ContainerEdit = styled.View`
flex: 1;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 40px 40px 0px 0px;
background-color: ${colorPallete.background2};
`
export const StyledImage = styled.Image`
width: 100px;
height: 100px;
`;

export const StyledScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}))`
`


export const StyledFlatList = styled.FlatList.attrs({
  contentContainerStyle: {
  },
})`` as unknown as typeof FlatList;


export const ScrollViewContainer = styled.View`
height: 82%;
width: 100%;
`

export const ButtonTouch = styled.TouchableOpacity`
width: 50%;
  padding: 8px 22px;
  border-radius: 8px;
  background-color: ${colorPallete.btnLight};
`
export const StyledText = styled.Text`
color: ${colorPallete.textWhite};
font-size: 18px;
font-weight: bold;
text-align: center;
`

export const ContainerForm = styled.View`
//height: 70%;
width: 80%;
`;

export const FormScrollView = styled(ContainerForm)`
//height: 100%;
`

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${colorPallete.textLight};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 8%;
  min-height: 32px;
  max-height: 44px;
  color: ${colorPallete.text};
  border-color: gray;
  border-radius: 8px;
  border-width: 1px;
  margin-bottom: 4%;
  padding: 0 8px;
`;

export const InputScroll = styled(Input)`
height: 60px;
color: ${colorPallete.text};
`

