import api from "@/services/api_config";

const API_BASE_PATH = "/auth";
export const authApi = {
  login: async (requestData: loginRequest): Promise<authResponse> => {
    const response = await api.post<authResponse>(
      `${API_BASE_PATH}/login`,
      requestData
    );
    return response.data;
  },
  register: async (requestData: registerRequest): Promise<authResponse> => {
    const response = await api.post<authResponse>(
      `${API_BASE_PATH}/signup`,
      requestData
    );
    return response.data;
  },
};
