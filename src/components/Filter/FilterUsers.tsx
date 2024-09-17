// FilterUsers.tsx
import React, { useContext, useState } from "react";
import { Container, Title, FilterOption, Label, RadioGroup, RadioLabel, RangeSlider, CheckboxGroup, ButtonContainer, Button, ScrollContainer } from "./FilterStyles";
import { ButtonText, UserButton } from "../FindUsers/UserCardStyles";
import RadioButtonGroup from "react-native-paper/lib/typescript/components/RadioButton/RadioButtonGroup";
import { View, Text } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";
import { Input } from "../../styleds/home";
import { navigate } from "../../routes/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import { FilterUserContext } from "../../context/FilterUserContext";
import { AuthContext } from "../../context/AuthContext";
import TagRemovable from "../Tags/TagRemovable";
import { Tag } from "../../services/apiClient";

export function FilterUsers() {
    const [genero, setGenero] = useState<string>('');
    const [idadeMin, setIdadeMin] = useState<number | null>(null);
    const [idadeMax, setIdadeMax] = useState<number | null>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([{id: 1, name: "futebol", type: "vida"}, {id: 2 , name: "nerd", type: "vida"}]);

    const navigation = useNavigation();
    const { filters, setFilters } = useContext(FilterUserContext)!;
    const authContext = useContext(AuthContext);
    const [checkLikedUsers, setCheckLikedUsers] = useState<boolean>(false);

    const filterOptions = {
        name: "",
        email: "",
        city: "",
        gender: genero,
        rangeAge: { idadeMin: idadeMin || 0, idadeMax: idadeMax || 100 },
        Ilike: checkLikedUsers,
        userId: authContext?.user?.id || 0,
        applyFilter: true
    };

    function handlerApply() {
        setFilters(filterOptions);
        console.log("AQUI está os filtros atualizados: \n\n" + JSON.stringify(filterOptions));
        navigation.goBack();
    }

    function handleRemoveTag(tagId: number) {
        setSelectedTags(prevTags => prevTags.filter(tag => tag.id !== tagId));
    }

    return (
        <Container>
            <Title>Filtrar Usuários</Title>
            <ScrollContainer>
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
                                <RadioButton value="feminino" />
                            </View>
                            <View>
                                <Text>Outro</Text>
                                <RadioButton value="Outro" />
                            </View>
                        </RadioButton.Group>
                    </RadioGroup>
                </FilterOption>

                <FilterOption>
                    <Label>Idade Mínima</Label>
                    <Input
                        keyboardType="numeric"
                        onChangeText={(value) => setIdadeMin(parseInt(value))}
                    />
                </FilterOption>

                <FilterOption>
                    <Label>Idade Máxima</Label>
                    <Input
                        keyboardType="numeric"
                        onChangeText={(value) => setIdadeMax(parseInt(value))}
                    />
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

                <FilterOption>
                    {selectedTags.length > 0 && selectedTags.map((tag) => (
                        <TagRemovable 
                            tag={tag} 
                            onRemove={handleRemoveTag} 
                            key={tag.id} 
                        />
                    ))}
                </FilterOption>

            </ScrollContainer>

            <UserButton onPress={handlerApply}>
                <ButtonText>Aplicar Filtros</ButtonText>
            </UserButton>
        </Container>
    );
}
