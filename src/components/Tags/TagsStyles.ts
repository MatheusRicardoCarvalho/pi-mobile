import styled from 'styled-components/native';
import { colorPallete } from '../../styleds/colorPallete';

export const TagContainer = styled.View`
  background-color: ${colorPallete.grey};
  border-radius: 12px;
  padding: 8px 16px;
  margin: 4px;
`;

export const TagText = styled.Text`
  font-size: 16px;
  color: ${colorPallete.text};
`;
