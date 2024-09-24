import styled from "styled-components/native";
import { colorPallete } from "./colorPallete";

export const TagBtn = styled.TouchableOpacity`
  background-color: #f0f0f0;
  padding: 4px 8px;
  margin-right: 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #333;
  height: fit-content;
  width: 160px;
  max-width: 160px;
  justify-content: center;
  align-items: center;
`;

export const ContainerChooseTags = styled.View`
flex: 1;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 40px 40px 0px 0px;
background-color: ${colorPallete.background2};
`

export const ScrollViewChooseTags = styled.ScrollView`

`