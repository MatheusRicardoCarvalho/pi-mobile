import styled from 'styled-components';
import { colorPallete } from '../../styleds/colorPallete';

export function Filter() {
    return (
        <Container>
            <Title>Filtrar Usuários</Title>
            <FilterOption>
                <Label>Sexo</Label>
                <RadioGroup>
                    <RadioLabel>
                        <input type="radio" name="gender" value="male" />
                        Masculino
                    </RadioLabel>
                    <RadioLabel>
                        <input type="radio" name="gender" value="female" />
                        Feminino
                    </RadioLabel>
                    <RadioLabel>
                        <input type="radio" name="gender" value="other" />
                        Outro
                    </RadioLabel>
                </RadioGroup>
            </FilterOption>

            <FilterOption>
                <Label>Idade</Label>
                <RangeSlider type="range" min="18" max="100" />
            </FilterOption>

            <FilterOption>
                <CheckboxGroup>
                    <input type="checkbox" id="liked" />
                    <Label htmlFor="liked">Somente usuários curtidos</Label>
                </CheckboxGroup>
            </FilterOption>

            <ButtonContainer>
                <Button>Aplicar Filtros</Button>
            </ButtonContainer>
        </Container>
    );
}

// Styled Components
const Container = styled.div`
    background-color: ${colorPallete.background};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
    color: ${colorPallete.text};
    margin-bottom: 20px;
`;

const FilterOption = styled.div`
    margin-bottom: 20px;
`;

const Label = styled.label`
    color: ${colorPallete.text};
    display: block;
    margin-bottom: 10px;
`;

const RadioGroup = styled.div`
    display: flex;
    gap: 10px;
`;

const RadioLabel = styled.label`
    color: ${colorPallete.textLight};
`;

const RangeSlider = styled.input`
    width: 100%;
    margin-top: 10px;
`;

const CheckboxGroup = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
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
