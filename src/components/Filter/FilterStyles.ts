import styled from 'styled-components/native';
import { colorPallete } from '../../styleds/colorPallete';

export const Container = styled.SafeAreaView`
    background-color: ${colorPallete.background};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ScrollContainer = styled.ScrollView`
    height: 100%;
    align-self: flex-start;
    width: 100%;
`
export const ContainerMain = styled.View`
    height: 85%;
    align-self: center;
    width: 100%;
`

export const Title = styled.Text`
    color: ${colorPallete.text};
    margin-bottom: 20px;
`;

export const FilterOption = styled.View`
    margin-bottom: 20px;
`;

export const Label = styled.Text`
    color: ${colorPallete.text};
    display: block;
    margin-bottom: 10px;
`;

export const RadioGroup = styled.View`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const RadioLabel = styled.Text`
    color: ${colorPallete.textLight};
`;

export const RangeSlider = styled.TextInput`
    width: 100%;
    margin-top: 10px;
`;

export const CheckboxGroup = styled.View`
    display: flex;
    align-items: flex-start;
`;

export const ButtonContainer = styled.View`
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.Button`
    background-color: ${colorPallete.accent};
    color: ${colorPallete.textWhite};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${colorPallete.btnLight};
    }
`;
