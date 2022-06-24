export class CustomerModel{
  id: number;
  email: string;
  name: string;
  password: string;
  passwordHash: string;
  passwordSalt: string;
  priceListId: number;
  priceListName: string;
  discount: number;
}
