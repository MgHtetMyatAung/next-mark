import { useMutation } from "@tanstack/react-query";
import { authApi } from ".";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";
import { useAuthStore } from "@/store/store-auth";

export const useLogin = () => {
  const { login } = useAuthStore();

  return useMutation({
    mutationFn: (formData: loginRequest) => authApi.login(formData),
    onSuccess: (data) => {
      setCookie("authToken", data.authToken);
      toast.success("Login successfully");
      login(data.authToken);
      // You might also update the cache directly if you know the new product's ID
    },
    onError: (error) => {
      console.error("Failed to login", error);
      toast.error(error.message);
    },
  });
};

export const useRegister = () => {
  const { login } = useAuthStore();

  return useMutation({
    mutationFn: (formData: registerRequest) => authApi.register(formData),
    onSuccess: (data) => {
      setCookie("authToken", data.authToken);
      toast.success("Register successfully");
      login(data.authToken);
      // You might also update the cache directly if you know the new product's ID
    },
    onError: (error) => {
      console.error("Failed to login", error);
      toast.error(error.message);
    },
  });
};
