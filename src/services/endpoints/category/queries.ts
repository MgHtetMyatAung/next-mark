import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { categoryApi } from ".";

type CategoryQueryOptions = Omit<
  UseQueryOptions<typeOfCategory, Error, typeOfCategory, readonly unknown[]>,
  "queryKey" | "queryFn" | "enabled"
>;

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryApi.getAllCategories(),
    // placeholderData: [], // Optional: for immediate UI
  });
};

export const useGetCategoryById = (
  categoryId: string | null,
  options?: CategoryQueryOptions
) => {
  return useQuery({
    queryKey: ["categories", categoryId],
    queryFn: () => categoryApi.getCategoryById(categoryId),
    ...options,
  });
};
