interface imageType {
  url: string;
}

interface typeOfProduct {
  id: string;
  created_at: Date;
  title: string;
  description: string;
  price: number;
  in_stock: boolean;
  is_feature: boolean;
  category_id: string;
  brand_id: string;
  stock: number;
  images: imageType[];
}
