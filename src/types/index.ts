export type TBanners = {
  id: number;
  image: string;
  linkTitle: string;
};
export type TCategory = {
  id: number;
  category: string;
  image: string;
};
export type TProducts = {
  id: number;
  title: string;
  description: string;
  details: string;
  availability: string;
  color: string;
  images: string[];
  code: string;
  rating: number;
  price: number;
  mrpPrice: number;
  category: string;
  discount: string;
  label: string;
  thumbelImage: string;
  video: string;
};

export type TBlog = {
  id:number;
  title:string;
  text:string;
  author:string;
  date:string;
  image:string | import('next/image').StaticImageData;
  authorImg:string | import('next/image').StaticImageData;
  category:string;
}
