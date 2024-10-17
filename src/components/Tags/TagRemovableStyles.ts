import { colorPallete } from '../../styleds/colorPallete';
import styled from 'styled-components/native';

export const TagContainer = styled.View`
  background-color: ${colorPallete.grey2};
  border-radius: 12px;
  padding: 8px 16px;
  margin: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TagText = styled.Text`
  font-size: 16px;
  color: ${colorPallete.text};
  flex: 1;
`;

export const RemoveButton = styled.TouchableOpacity`
  background-color: ${colorPallete.greyLight};
  border-radius: 50px; /* Faz o botão circular */
  width: 24px; /* Tamanho do botão */
  height: 24px; /* Tamanho do botão */
  justify-content: center;
  align-items: center;
  margin-left: 8px; /* Espaçamento entre o texto e o botão */
`;

export const RemoveButtonText = styled.Text`
  color: ${colorPallete.textWhite};
  font-size: 18px; /* Tamanho do "X" */
`;