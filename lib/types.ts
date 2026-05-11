export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  full_description: string | null;
  material: string | null;
  price: number;
  original_price: number | null;
  badge: string | null;
  image_url: string;
  category: string | null;
  sizes: string[];
  colors: string[];
  stock: number;
  created_at?: string;
}
