import { Tag } from "../../services/apiClient";
import { TagContainer, TagText } from "./TagsStyles";


export default function Tags(tag: Tag) {


      return (
            <TagContainer>
                  <TagText>{tag.name}</TagText>
            </TagContainer>
      )
}