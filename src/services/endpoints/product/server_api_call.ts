import { fetchApi } from "@/services/api_fetcher";

export async function getProductsList(): Promise<typeOfProduct[]> {
  return fetchApi<typeOfProduct[]>("/product", {
    next: { revalidate: 3600 }, // Default revalidation for product list
  });
}

export async function getProductById(id: string): Promise<typeOfProduct> {
  return fetchApi<typeOfProduct>(`/product/${id}`, {
    next: { revalidate: 1800 }, // Can override revalidation for a single product
  });
}
