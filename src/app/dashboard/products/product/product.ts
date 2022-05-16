export interface Product {
  id: number;
  name: string;
  category_id: number;
  description: string;
  photo: string;
  price: number;
  price_promotion: number;
  created_at: Date;
  updated_at: Date;
}

