// menu.ts

import { getAllCategories } from "@/services/category";
import { TCategory } from "@/types";


export const getMenuList = async () => {
  const categories = await getAllCategories();

  return [
    {
      id: 1,
      title: "shop",
      subMenu: categories.map((cat: TCategory) => ({
        id: cat.id,
        title: cat.category.toUpperCase(), 
        img: cat.image,
        link: `/category/${cat.category.toLowerCase()}`,
      })),
    },
  ];
};
