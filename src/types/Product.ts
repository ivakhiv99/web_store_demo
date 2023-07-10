export interface IProduct extends Record<string, unknown> {
  id: number;
  title: string;
  price: number;
  image: string;
};

export interface IDetailedProduct extends IProduct {
    category: string;
    description: string;
}