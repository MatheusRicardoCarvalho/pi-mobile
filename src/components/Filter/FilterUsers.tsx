import React, { useState } from "react";
import { Container, Title, FilterOption, Label, RadioGroup, RadioLabel, RangeSlider, CheckboxGroup, ButtonContainer , Button} from "./FilterStyles";
import { ButtonText, UserButton } from "../FindUsers/UserCardStyles";
import RadioButtonGroup from "react-native-paper/lib/typescript/components/RadioButton/RadioButtonGroup";
import { View, Text } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";
import { Input } from "../../styleds/home";
import { navigate } from "../../routes/RootNavigation";


export function FilterUsers() {
    const [genero, setGenero] = useState<string>('')
    const [idade, setIdade] = useState<number | null>()

    const [checkLikedUsers, setCheckLikedUsers] = useState<boolean>(false)
    const filterOptions = {
        gender: genero,
        rangeAge: {idadeMin: idade, idadeMax: idade},
        Ilike: checkLikedUsers
    }
    function handlerApply() {
        navigate("FindUsers", {filterOptions})
    }

    return (
        <Container>
            <Title>Filtrar Usuários</Title>
            <FilterOption>
                <Label>Genero</Label>
                <RadioGroup>
                    <RadioButton.Group onValueChange={newValue => setGenero(newValue)} value={genero}>
                        <View>
                            <Text>Masculino</Text>
                            <RadioButton value="masculino" />
                        </View>
                        <View>
                            <Text>Feminino</Text>
                            <RadioButton value="Feminino" />
                        </View>
                        <View>
                            <Text>Outro</Text>
                            <RadioButton value="Outro" />
                        </View>
                    </RadioButton.Group>
                </RadioGroup>
            </FilterOption>

            <FilterOption>
                <Label>Idade</Label>
                <Input keyboardType="numeric" onChangeText={(value) => setIdade(parseInt(value))}/>
            </FilterOption>

            <FilterOption>
                <CheckboxGroup>
                    <Checkbox.Item 
                        label="Somente usuários que eu curti"
                        mode="android"
                        status={checkLikedUsers ? "checked" : "unchecked"}
                        onPress={() => setCheckLikedUsers(!checkLikedUsers)}
                    />
                </CheckboxGroup>
            </FilterOption>

            <UserButton
            onPress={handlerApply}
            >
                <ButtonText>Aplicar Filtros</ButtonText>
            </UserButton>
        </Container>
    );
}
