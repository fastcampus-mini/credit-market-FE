export interface IProduct {
  map: React.FunctionComponent;
  productId: string;
  productName: string;
  companyName: string;
  favorite: boolean;
  productTypeName: string;
  avgInterest: string;
  optionsInterestType: string;
  productJoinMethod?: string;
}
