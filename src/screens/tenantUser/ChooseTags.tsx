import { useContext, useEffect, useState } from "react";
import { ButtonTouch, ScrollViewContainer, StyledText, Title } from "../../styleds/home";
import { Tag } from "../../services/apiClient";
import { api } from "../../services/api";
import { TagsContainer, TagText } from "../../styleds/MyUserProfile";
import { AuthContext } from "../../context/AuthContext";
import { ContainerChooseTags, ScrollViewChooseTags, TagBtn } from "../../styleds/ChooseTags";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function ChooseTags() {
  const navigation = useNavigation();
  const [tags, setTags] = useState<Tag[]>([]);
  const [myTags, setMyTags] = useState<Tag[]>([]);

  const authContext = useContext(AuthContext);
  const userId = authContext?.user?.id;

  async function handleAddTag(tagIds: number) {
    try {
      const data = { userId, tagIds };
      console.log("\n\n Id usuario: ", userId, "\n\n tagId: ", tagIds);
      const response = await api.post("/user/addTags", data);
      const addedTag = tags.find(tag => tag.id === tagIds); // Encontra a tag adicionada no array de todas as tags
        if (addedTag) {
            setMyTags(prevMyTags => [...prevMyTags, addedTag]); // Adiciona a tag ao array myTags
        }
        Alert.alert("Dados atualizados", "", [
            { text: "OK", onPress: () => null },
        ]);
    } catch (err) {
      Alert.alert("" + err, "", [{ text: "OK", onPress: () => null }]);
    }
  }

  async function handleRemoveTag(tagId: number) {
    try{
        const data = {userId, tagId}
        const response = await api.delete("/user/tag", {data});
        const removedTagIndex = myTags.findIndex(tag => tag.id === tagId); // Encontra o índice da tag removida em myTags
        if (removedTagIndex !== -1) {
            const updatedTags = [...myTags]; // Cria uma cópia do array myTags
            updatedTags.splice(removedTagIndex, 1); // Remove a tag do array usando o índice
            setMyTags(updatedTags); // Atualiza o estado myTags sem a tag removida
        }

        Alert.alert("Dados atualizados", "", [
            { text: "OK", onPress: () => null },
          ]);
    } catch(err){
        Alert.alert("" + err, "", [{ text: "OK", onPress: () => null }]);

    }
  }

  useEffect(() => {
    getTags();
  }, []);

  async function getTags() {
    try {
      const data = { userId };
      const response: Tag[] = (await api.get("/tags")).data.tags;
      setTags(response);
      const responseMyTags: Tag[] = (await api.post("/user/tags", data)).data.tags;
      setMyTags(responseMyTags);
      console.log(responseMyTags);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  }

  return (
    <>
        <Title>Editar Tags</Title>

        <ContainerChooseTags>
            <ScrollViewChooseTags>
            <Title>Minhas tags</Title>
        {myTags ? (
          <TagsContainer>
            {myTags.map((tag) => (
              <TagBtn key={tag.id} onPress={() => handleRemoveTag(tag.id)}>
                <TagText>{tag.name}</TagText>
              </TagBtn>
            ))}
          </TagsContainer>
        ) : null}

        <Title>vida:</Title>
        {tags ? (
          <TagsContainer>
            {tags.map((tag) =>
              tag.type == "Vida" ? (
                <TagBtn key={tag.id} onPress={() => handleAddTag(tag.id)}>
                  <TagText>{tag.name}</TagText>
                </TagBtn>
              ) : null
            )}
          </TagsContainer>
        ) : null}

        <Title>limpeza:</Title>
        {tags ? (
          <TagsContainer>
            {tags.map((tag) =>
              tag.type == "Limpeza" ? (
                <TagBtn key={tag.id} onPress={() => handleAddTag(tag.id)}>
                  <TagText>{tag.name}</TagText>
                </TagBtn>
              ) : null
            )}
          </TagsContainer>
        ) : null}

        <Title>privacidade:</Title>
        {tags ? (
          <TagsContainer>
            {tags.map((tag) =>
              tag.type == "Privacidade" ? (
                <TagBtn key={tag.id} onPress={() => handleAddTag(tag.id)}>
                  <TagText>{tag.name}</TagText>
                </TagBtn>
              ) : null
            )}
          </TagsContainer>
        ) : null}
            </ScrollViewChooseTags>
            <ButtonTouch style={{marginBottom: 20}} onPress={() => navigation.goBack()}><StyledText style={{fontSize: 16}}>Voltar</StyledText></ButtonTouch>

        </ContainerChooseTags>
    </>
  );
}
