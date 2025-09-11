import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { productApi } from ".";

type ProductQueryOptions = Omit<
  UseQueryOptions<typeOfProduct, Error, typeOfProduct, readonly unknown[]>,
  "queryKey" | "queryFn" | "enabled"
>;

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => productApi.getAllProducts(),
    // placeholderData: [], // Optional: for immediate UI
  });
};

export const useGetProductById = (
  productId: string | null,
  options?: ProductQueryOptions
) => {
  return useQuery({
    queryKey: ["products", productId],
    queryFn: () => productApi.getProductById(productId),
    ...options,
  });
};
