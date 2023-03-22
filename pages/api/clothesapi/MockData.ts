import { ETypeOfClothe, IClothes } from "@/pages/store/IClothes";

export const MockData: IClothes[] = [
  { Id: 1, Name: "Cap-tshirt", Price: 300, Type: ETypeOfClothe.Top },
  { Id: 2, Name: "Overkill", Price: 500, Type: ETypeOfClothe.Pants },
  { Id: 3, Name: "Dance Moves", Price: 600, Type: ETypeOfClothe.Gloves },
  { Id: 4, Name: "Flying Yellow", Price: 700, Type: ETypeOfClothe.Shoes },
  { Id: 5, Name: "Summer Top", Price: 350, Type: ETypeOfClothe.Top },
];
