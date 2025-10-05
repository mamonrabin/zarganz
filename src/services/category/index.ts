"use server";
import { apiBaseUrl } from "@/config/config";

export const getAllCategories = async () => {
  const res = await fetch(`${apiBaseUrl}/categories`);

  return res.json();
};