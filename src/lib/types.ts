import type { LucideIcon } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: Record<string, string>;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export interface EnquiryItem extends Product {
  quantity: number;
}

export type MegaMenuProduct = {
  title: string;
  subCategories: string[];
};
