import {
  ContainerTags,
  LabelTitle,
  ShowAndChooseAllTagsContainer,
} from "./ShowAndChoseTagsStyles";
import { Tag } from "../../services/apiClient";
import { ScrollViewChooseTags, TagBtn } from "../../styleds/ChooseTags";
import { TagText } from "../../styleds/MyUserProfile";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../services/api";
import { ButtonTouch } from "../../styleds/home";
import { FilterUserContext } from "../../context/FilterUserContext";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
interface ShowAndChooseAllTagsProps {
  tags: Tag[];
  handleAddTag: (selectedsTag: Tag[]) => void;
}

export default function ShowAndChooseAllTags() {
    const authContext = useContext(AuthContext);
const filterContext = useContext(FilterUserContext);
  const [newTags, setNewTags] = useState<Tag[]>(filterContext?.filters.tags || []);
  const [allTags, setAllTags] = useState<Tag[]>([]);
  const userId = authContext?.user?.id;
const navigation = useNavigation();
  

  function handleAddNewTag(tag: Tag) {
    setNewTags((prevTags) => [...prevTags, tag]);
    filterContext?.setFilters({...filterContext?.filters, tags: newTags});
  }

  function handleRemoveTag(tagId: number) {
    setNewTags((prevTags) => prevTags.filter((tag) => tag.id !== tagId));
    filterContext?.setFilters({...filterContext?.filters, tags: newTags});
  }
  async function setupTags() {
    try {
      const data = { userId };
      const response: Tag[] = (await api.get("/tags")).data.tags;
      setAllTags(response);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  }

  function handleSaveTags() {
    filterContext?.setFilters({...filterContext?.filters, tags: newTags});
    navigation.goBack();
  }

  useEffect(() => {
    setupTags();
  }, []);
  return (
    <>

    <ShowAndChooseAllTagsContainer>
    
    <LabelTitle>Tags Selecionadas</LabelTitle>

      <ContainerTags>
        {newTags.map((tag) => (
          <TagBtn key={tag.id} onPress={() => handleRemoveTag(tag.id)}>
            <TagText>{tag.name}</TagText>
          </TagBtn>
        ))}
        </ContainerTags>
    <ScrollViewChooseTags>
    

      <LabelTitle>Vida</LabelTitle>
      <ContainerTags>
        {allTags.map((tag) => tag.type == "Vida" ? (
          <TagBtn key={tag.id} onPress={() => handleAddNewTag(tag)}>
            <TagText>{tag.name}</TagText>
          </TagBtn>
        ): null)}
      </ContainerTags>
      <LabelTitle>Limpeza</LabelTitle>
      <ContainerTags>
        {allTags.map((tag) => tag.type == "Limpeza" ? (
          <TagBtn key={tag.id} onPress={() => handleAddNewTag(tag)}>
            <TagText>{tag.name}</TagText>
          </TagBtn>
        ): null)}
      </ContainerTags>
      <LabelTitle>Privacidade</LabelTitle>
      <ContainerTags>
        {allTags.map((tag) => tag.type == "Privacidade" ? (
          <TagBtn key={tag.id} onPress={() => handleAddNewTag(tag)}>
            <TagText>{tag.name}</TagText>
          </TagBtn>
        ): null)}
      </ContainerTags>
      </ScrollViewChooseTags>
      <ButtonTouch onPress={handleSaveTags}><Text>Salvar</Text></ButtonTouch>
    </ShowAndChooseAllTagsContainer>
    </>
  );
}
