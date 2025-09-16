// Define a common interface for the data we expect
// interface ApiResponse<T> {
//   data: T;
// }

import { RequestInit } from "next/dist/server/web/spec-extension/request";

// Define the shape of the fetch options we'll use
// interface FetchOptions {
//   method?: "GET" | "POST" | "PUT" | "DELETE";
//   body?: Record<string, any>;
//   headers?: HeadersInit;
//   // This allows us to pass Next.js specific options
//   next?: {
//     revalidate?: number;
//     tags?: string[];
//   };
// }

export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${baseUrl}${endpoint}`;

  // Set default headers
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`, // Securely use API key
    ...options.headers,
  };

  try {
    const res = await fetch(url, {
      method: options.method || "GET",
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
      next: options.next,
    });

    if (!res.ok) {
      // Throw a specific error for better debugging
      throw new Error(`API call failed: ${res.status} ${res.statusText}`);
    }

    const data: T = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    // You can re-throw a more user-friendly error
    throw new Error(`An error occurred while fetching data.`);
  }
}
