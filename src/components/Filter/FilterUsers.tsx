import React from "react";
import { Container, Title, FilterOption, Label, RadioGroup, RadioLabel, RangeSlider, CheckboxGroup, ButtonContainer , Button} from "./FilterStyles";
import { ButtonText, UserButton } from "../FindUsers/UserCardStyles";


export function FilterUsers() {
    return (
        <Container>
            <Title>Filtrar Usuários</Title>
            <FilterOption>
                <Label>Sexo</Label>
                <RadioGroup>
                    <RadioLabel>
                        Masculino
                    </RadioLabel>
                    <RadioLabel>
                        Feminino
                    </RadioLabel>
                    <RadioLabel>
                        Outro
                    </RadioLabel>
                </RadioGroup>
            </FilterOption>

            <FilterOption>
                <Label>Idade</Label>
                <RangeSlider aria-valuemin={18} aria-valuemax={100} />
            </FilterOption>

            <FilterOption>
                <CheckboxGroup>
                    <Label >Somente usuários curtidos</Label>
                </CheckboxGroup>
            </FilterOption>

            <UserButton>
                <ButtonText>Aplicar Filtros</ButtonText>
            </UserButton>
        </Container>
    );
}
