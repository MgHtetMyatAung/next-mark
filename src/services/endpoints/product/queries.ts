import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { productApi } from ".";

type ProductQueryOptions = Omit<
  UseQueryOptions<typeOfProduct, Error, typeOfProduct, readonly unknown[]>,
  "queryKey" | "queryFn" | "enabled"
>;

export const useGetProductById = (
  productId: string | null,
  options?: ProductQueryOptions
) => {
  return useQuery({
    queryKey: ["products", productId],
    queryFn: () => productApi.getProductById(productId),
    enabled: !!productId, // Only run if productId is available
    ...options,
  });
};
