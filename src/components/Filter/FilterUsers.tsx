// FilterUsers.tsx
import React, { useContext, useEffect, useState } from "react";
import { Container, Title, FilterOption, Label, RadioGroup, RadioLabel, RangeSlider, CheckboxGroup, ButtonContainer, Button, ScrollContainer, ContainerMain } from "./FilterStyles";
import { ButtonText, UserButton } from "../FindUsers/UserCardStyles";
import RadioButtonGroup from "react-native-paper/lib/typescript/components/RadioButton/RadioButtonGroup";
import { View, Text } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";
import { ButtonTouch, Input, StyledText } from "../../styleds/home";
import { navigate } from "../../routes/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import { FilterUserContext } from "../../context/FilterUserContext";
import { AuthContext } from "../../context/AuthContext";
import TagRemovable from "../Tags/TagRemovable";
import { Tag } from "../../services/apiClient";
import ShowAndChooseAllTags from "../ShowAndChooseAllTags/ShowAndChooseAllTags";
import { RadioView } from "../../styleds/generalStyles";

export function FilterUsers() {
    const [genero, setGenero] = useState<string>('');
    const [idadeMin, setIdadeMin] = useState<number | null>(null);
    const [idadeMax, setIdadeMax] = useState<number | null>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [tagsName, setTagsName] = useState<string[]>([]);
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
        tags: selectedTags,
        applyFilter: true
    };

    function handlerApply() {
        setFilters(filterOptions);
        console.log("AQUI está os filtros atualizados: \n\n" + JSON.stringify(filterOptions));
        navigation.goBack();
    }

    function handleRemoveTag(tagId: number, tagName: string) {
        setFilters({...filters, tags: filters.tags.filter(tag => tag.id !== tagId)});
        //setSelectedTags(prevTags => prevTags.filter(tag => tag.id !== tagId));
        setTagsName(prevTags => prevTags.filter(tag => tag !== tagName));
    }

    function handleAddTags(tags: Tag[]) {
        setSelectedTags(prevTags => [...prevTags, ...tags]);
        setTagsName(prevTags => [...prevTags, ...tags.map(tag => tag.name)]);
    }

    useEffect(() => {
        setSelectedTags(filters.tags);
    }, [filters.tags]);

    return (
        <Container>
            <ContainerMain>
            <Title>Filtrar Usuários</Title>
            
                <FilterOption>
                    <Label>Genero</Label>
                    <RadioGroup>
                <RadioButton.Group
                  onValueChange={(newValue) => setGenero(newValue)}
                  value={genero}
                >
                  <RadioView>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Label>Masculino</Label>
                    <RadioButton value="masculino" />
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Label>Feminino</Label>
                    <RadioButton value="feminino" />
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Label>Outro</Label>
                    <RadioButton value="Outro" />
                  </View>
                  </RadioView>
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

                <ScrollContainer>
                <FilterOption>
                    <Label>Filtrar por Tags</Label>
                    <ButtonTouch onPress={() => navigate("ShowAndChooseAllTags", {})}><StyledText style={{fontSize: 16}}>Escolher Tags</StyledText></ButtonTouch>
                    {selectedTags.length > 0 && selectedTags.map((tag) => (
                        <TagRemovable 
                            tag={tag} 
                            onRemove={handleRemoveTag} 
                            key={tag.id} 
                        />
                    ))}
                </FilterOption>

            </ScrollContainer>
                    </ContainerMain>
            <UserButton onPress={handlerApply}>
                <ButtonText>Aplicar Filtros</ButtonText>
            </UserButton>
        </Container>
    );
}
