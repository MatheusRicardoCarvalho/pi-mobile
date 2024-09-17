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

export async function getTags(){
  try {  
  const response: Tag[] = (await api.get("/tags")).data.tags;
      return response
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  
}