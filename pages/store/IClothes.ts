export interface IClothes {
    Id:number;
    Name:string;
    Type: ETypeOfClothe;
    Price:number;
}

export enum ETypeOfClothe {
    Mask = 4,
    Top = 0,
    Pants = 1,
    Gloves = 2,
    Shoes = 3
}