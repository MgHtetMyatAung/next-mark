import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authApi } from ".";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: loginRequest) => authApi.login(formData),
    onSuccess: (data) => {
      setCookie("authToken", data.authToken);
      toast.success("Login successfully");
      // You might also update the cache directly if you know the new product's ID
    },
    onError: (error) => {
      console.error("Failed to login", error);
      toast.error(error.message);
    },
  });
};
