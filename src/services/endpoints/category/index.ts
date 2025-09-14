import api from "@/services/api_config";

const API_BASE_PATH = "/category";

export const categoryApi = {
  getAllCategories: async (): Promise<typeOfCategory[]> => {
    const response = await api.get<typeOfCategory[]>(API_BASE_PATH);
    return response.data;
  },
  getCategoryById: async (id: string | null): Promise<typeOfCategory> => {
    if (!id) {
      throw new Error("Category ID is missing.");
    }
    const response = await api.get<typeOfCategory>(`${API_BASE_PATH}/${id}`);
    return response.data;
  },
};
