import { fetchApi } from "@/services/api_fetcher";

export async function getCategoriesList(): Promise<typeOfCategory[]> {
  return fetchApi<typeOfCategory[]>("/category", {
    next: { revalidate: 3600 }, // Default revalidation for product list
  });
}
