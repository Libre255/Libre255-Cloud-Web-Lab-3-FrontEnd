export interface IClothes {
  Id: number | undefined;
  Name: string | undefined;
  Type: ETypeOfClothe | string;
  Price: number | undefined;
}

export enum ETypeOfClothe {
  Mask = 4,
  Top = 0,
  Pants = 1,
  Gloves = 2,
  Shoes = 3,
}
