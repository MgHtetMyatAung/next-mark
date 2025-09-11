import api from "@/services/api_config";

const API_BASE_PATH = "/product";

export const productApi = {
  getAllProducts: async (): Promise<typeOfProduct[]> => {
    const response = await api.get<typeOfProduct[]>(API_BASE_PATH);
    return response.data;
  },
  getProductById: async (id: string | null): Promise<typeOfProduct> => {
    if (!id) {
      throw new Error("Product ID is missing.");
    }
    const response = await api.get<typeOfProduct>(`${API_BASE_PATH}/${id}`);
    return response.data;
  },
};
