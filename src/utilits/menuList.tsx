 // menu.ts

// import { getAllCategories } from "@/services/category";
// import { TCategory } from "@/types";
import { categoryList } from "../api/categoryApi";



export const getMenuList = async () => {
  // const categories = await getAllCategories();

  return [
    {
      id: 1,
      title: "shop",
      subMenu: categoryList.map((cat) => ({
        id: cat.id,
        title: cat.category.toUpperCase(), 
        img: cat.image,
        link: `/category/${cat.category.toLowerCase()}`,
      })),
    },
  ];
};
