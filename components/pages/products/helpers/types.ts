export interface ProductCardProps {
  name: string;
  price: number;
  salePrice?: number;
  image: string;
}

export interface Product extends ProductCardProps {
  id: number;
}
