export enum Category {
  Lighting = "Lighting",
  Fans = "Fans",
  WiresAndCables = "Wires & Cables",
  SwitchesAndSockets = "Switches & Sockets",
  CCTVAndSecurity = "CCTV & Security",
  PowerAndAccessories = "Power & Accessories"
}

export interface ProductSpecs {
  [key: string]: string;
}

export interface Product {
  id: string;
  title: string;
  category: Category;
  price: number;
  short_desc: string;
  long_desc: string;
  specs: ProductSpecs;
  images: string[];
  stock: boolean;
  tags: string[];
  meta_title: string;
  meta_description: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'product';
  jsonLd?: object;
}