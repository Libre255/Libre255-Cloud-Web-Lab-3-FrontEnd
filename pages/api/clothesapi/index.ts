import { NextApiRequest, NextApiResponse } from "next";
import { MockData } from "./MockData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // const databaseUrl = "https://localhost:7235/ClothesAPI/GetAllClothes"
    // const TestUrl = "https://dummyjson.com/products/1"
    // const dataa = await axios.get(databaseUrl);
    //i wanted to use databaseUrl but it doesnt work because of cors in NextJs
    //i tried to do alot of research but couldnt find a solution
    res.status(200).send(MockData);
  } catch (error: any) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
}
