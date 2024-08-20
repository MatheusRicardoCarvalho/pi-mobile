import React, { useContext, useState } from "react";
import { Container, Title, FilterOption, Label, RadioGroup, RadioLabel, RangeSlider, CheckboxGroup, ButtonContainer , Button} from "./FilterStyles";
import { ButtonText, UserButton } from "../FindUsers/UserCardStyles";
import RadioButtonGroup from "react-native-paper/lib/typescript/components/RadioButton/RadioButtonGroup";
import { View, Text } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";
import { Input } from "../../styleds/home";
import { navigate } from "../../routes/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import { FilterUserContext } from "../../context/FilterUserContext";
import { AuthContext } from "../../context/AuthContext";

export function FilterUsers() {
    const [genero, setGenero] = useState<string>('')
    const [idade, setIdade] = useState<number | null>()
    const navigation = useNavigation()
    const { filters, setFilters } = useContext(FilterUserContext)!;
    const authContext = useContext(AuthContext);
    const [checkLikedUsers, setCheckLikedUsers] = useState<boolean>(false)

    const filterOptions = {
        name: "",
        email: "",
        city: "",
        gender: genero,
        rangerAge: {idadeMin: idade, idadeMax: idade},
        Ilike: checkLikedUsers,
        userId: authContext?.user?.id || 0,
        applyFilter: true
    }
    function handlerApply() {
        setFilters(filterOptions)
        navigation.goBack()
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
