import styled from 'styled-components/native';
import { colorPallete } from '../../styleds/colorPallete';

export const LabelTitle = styled.Text`
    font-size: 24px;
    margin-top: 10px;
    font-weight: bold;
    color: ${colorPallete.text};
`;

export const ShowAndChooseAllTagsContainer = styled.View`
    flex: 1;
width: 100%;
padding-top: 2%;
padding-left: 4%;
padding-right: 4%;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 40px 40px 0px 0px;
background-color: ${colorPallete.background2};
`;

export const ContainerTags = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 8px;
    row-gap: 8px;
    align-items: center;
    height: fit-content;
`;
