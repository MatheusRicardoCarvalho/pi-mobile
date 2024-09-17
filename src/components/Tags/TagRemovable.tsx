import React from "react";
import { TagContainer, TagText,  } from "./TagRemovableStyles";
import { RemoveButton, RemoveButtonText } from "./TagRemovableStyles";

type TagType = {
      name: string,
      id: number
}

interface Prop {
      tag: TagType,
      onRemove: (id: number) => void
}

const TagRemovable = ({ tag, onRemove }: Prop) => {
      return (
        <TagContainer>
          <TagText>{tag.name}</TagText>
          <RemoveButton onPress={() => onRemove(tag.id)}>
            <RemoveButtonText>X</RemoveButtonText>
          </RemoveButton>
        </TagContainer>
      );
    };
    
    export default TagRemovable;