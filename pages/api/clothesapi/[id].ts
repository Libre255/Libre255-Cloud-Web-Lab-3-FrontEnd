import { NextApiRequest, NextApiResponse } from "next";
import { MockData } from "./MockData";

export default async function handler(req: NextApiRequest, res:NextApiResponse){
    const {id} = req.query;
    const singleItem = MockData.filter(Clothe => Clothe.Id === Number(id))
    res.send(singleItem)
}