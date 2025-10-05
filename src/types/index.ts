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
  color: string[];
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
