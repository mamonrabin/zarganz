
// "use server";
// import { apiBaseUrl } from "@/config/config";



// export const getAllProducts = async (params: Record<string, any> = {}) => {
//   const queryString = new URLSearchParams(params).toString();
//   const res = await fetch(`${apiBaseUrl}/products?${queryString}`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   return res.json();
// };

// export const getProductById = async (id: number | string) => {
//   const res = await fetch(`${apiBaseUrl}/products/${id}`);
//   return res.json();
// };