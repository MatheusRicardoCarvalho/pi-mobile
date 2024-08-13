import { api } from "./api";

export interface Tag {
    id: number;
    name: string;
    type: string;
  }

export async function getUserTags(userId: string):Promise<Tag[]> {
    try {
      const data = { userId }
      const res: Tag[] = (await api.post("/user/tags", data)).data.tags;
      return res
    } catch (error) {
      throw new Error("Error fetching tags:"+ error);
    }
  }