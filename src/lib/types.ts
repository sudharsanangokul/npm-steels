import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  availableThickness: string;
  dimensions: string;
  materialGrade: string;
  gstInfo?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  industries: string[];
};

export type EnquiryItem = {
  product: Product;
  quantity: number;
};
