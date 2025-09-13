import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface User {
  id: string;
  name: string;
  email: string;
}

// Define the shape of the authentication state
export interface AuthState {
  //   user: User | null;
  isLoggedIn: boolean;
  login: (data: string) => void;
  logout: () => void;
}

// Create the Zustand store for authentication with devtools and persist middleware
export const useAuthStore = create<AuthState>()(
  // The 'persist' middleware is wrapped around the 'devtools' middleware
  persist(
    devtools(
      (set) => ({
        // Initial state
        // user: null,
        isLoggedIn: false,

        // Action to log the user in
        login: (data) =>
          set(
            () => ({
              isLoggedIn: !!data,
            }),
            false,
            "auth/login"
          ),

        // Action to log the user out
        logout: () =>
          set(
            () => ({
              isLoggedIn: false,
            }),
            false,
            "auth/logout"
          ),
      }),
      {
        // Devtools configuration
        name: "Authentication Store",
      }
    ),
    {
      // Persist configuration
      name: "auth-storage", // A unique name for the storage key
    }
  )
);
