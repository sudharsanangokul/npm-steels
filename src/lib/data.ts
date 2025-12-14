import {
  Wrench,
  Truck,
  Award,
  Zap,
  ShieldCheck,
  Package,
} from 'lucide-react';
import type { Product, Service } from './types';
import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string) => PlaceHolderImages.find((img) => img.id === id)?.imageUrl || '';

export const products: Product[] = [
  {
    id: 'P001',
    name: 'HR Sheet',
    slug: 'hr-sheet',
    description: 'Hot Rolled sheets are known for their durability and are suitable for applications where finish and precise dimensions are not a primary concern.',
    image: findImage('hr-sheet'),
    availableThickness: '1.6mm - 12mm',
    dimensions: '1250x2500mm, 1500x3000mm, Custom',
    materialGrade: 'IS 2062, IS 1079',
    gstInfo: '18% GST Applicable',
  },
  {
    id: 'P002',
    name: 'CR Sheet',
    slug: 'cr-sheet',
    description: 'Cold Rolled sheets offer a superior surface finish and tighter tolerances, making them ideal for high-precision applications.',
    image: findImage('cr-sheet'),
    availableThickness: '0.5mm - 3mm',
    dimensions: '1250x2500mm, Custom',
    materialGrade: 'IS 513 D, DD, EDD',
    gstInfo: '18% GST Applicable',
  },
  {
    id: 'P003',
    name: 'Checker Plate HR',
    slug: 'checker-plate-hr',
    description: 'Hot Rolled Checker Plates provide an excellent anti-slip surface, perfect for flooring, stairs, and walkways in industrial environments.',
    image: findImage('checker-plate-hr'),
    availableThickness: '3mm - 10mm',
    dimensions: '1250x2500mm',
    materialGrade: 'IS 2062',
    gstInfo: '18% GST Applicable',
  },
  {
    id: 'P004',
    name: 'GI Sheet',
    slug: 'gi-sheet',
    description: 'Galvanized Iron sheets are coated with zinc to prevent corrosion, making them highly durable and suitable for outdoor use and roofing.',
    image: findImage('gi-sheet'),
    availableThickness: '0.4mm - 2mm',
    dimensions: '1250x2500mm, Coils',
    materialGrade: 'IS 277',
    gstInfo: '18% GST Applicable',
  },
  {
    id: 'P005',
    name: 'SS Sheet',
    slug: 'ss-sheet',
    description: 'Stainless Steel sheets offer high corrosion resistance, strength, and a hygienic surface, widely used in food processing and medical equipment.',
    image: findImage('ss-sheet'),
    availableThickness: '0.5mm - 6mm',
    dimensions: '1250x2500mm, Custom',
    materialGrade: '304, 316, 430',
    gstInfo: '18% GST Applicable',
  },
  {
    id: 'P006',
    name: 'Japan Sheet',
    slug: 'japan-sheet',
    description: 'Premium quality sheets imported with exceptional flatness and surface quality, designed for high-end manufacturing and automotive parts.',
    image: findImage('japan-sheet'),
    availableThickness: '0.6mm - 2.3mm',
    dimensions: 'Custom sizes available',
    materialGrade: 'JIS G3141 SPCC-SD',
    gstInfo: '18% GST Applicable',
  },
];

export const services = [
  {
    id: 'S001',
    title: 'Laser Cutting',
    description: 'High-precision laser cutting for intricate designs and clean edges on various metal thicknesses.',
    icon: Zap,
    image: findImage('service-laser-cutting'),
    industries: ['Automotive', 'Aerospace', 'Electronics', 'Signage'],
  },
  {
    id: 'S002',
    title: 'Plasma Cutting',
    description: 'Efficient and fast cutting for thick metal plates, ideal for heavy fabrication and structural components.',
    icon: Zap,
    image: findImage('service-plasma-cutting'),
    industries: ['Shipbuilding', 'Construction', 'Heavy Machinery'],
  },
  {
    id: 'S003',
    title: 'CNC Bending',
    description: 'Accurate and repeatable bending and forming of sheet metal parts to your exact specifications.',
    icon: Wrench,
    image: findImage('service-cnc-bending'),
    industries: ['Enclosures', 'Brackets', 'Chassis', 'Furniture'],
  },
  {
    id: 'S004',
    title: 'Welding',
    description: 'Professional MIG, TIG, and spot welding services to assemble and fabricate complex metal structures.',
    icon: Wrench,
    image: findImage('service-welding'),
    industries: ['Structural Steel', 'Custom Projects', 'Repair Work'],
  },
  {
    id: 'S005',
    title: 'Custom Fabrication',
    description: 'End-to-end fabrication solutions, from design assistance to finished product assembly.',
    icon: Wrench,
    image: findImage('service-custom-fabrication'),
    industries: ['Prototyping', 'Architectural', 'Industrial Equipment'],
  },
];

export const whyChooseUsItems = [
  {
    icon: ShieldCheck,
    title: 'ISO Quality Certified',
    description: 'We adhere to strict ISO 9001 quality standards, ensuring every product meets your expectations.',
  },
  {
    icon: Truck,
    title: 'Fast & Reliable Delivery',
    description: 'Our logistics network ensures your orders are delivered on time, every time, across the region.',
  },
  {
    icon: Award,
    title: 'Competitive Pricing',
    description: 'We leverage bulk purchasing and efficient processes to offer you the best prices in the market.',
  },
  {
    icon: Package,
    title: 'Bulk Order Support',
    description: 'Capable of handling large-volume orders with consistent quality and dedicated support.',
  },
  {
    icon: Zap,
    title: 'Advanced Machines',
    description: 'Our state-of-the-art cutting and bending machines deliver unparalleled precision and speed.',
  },
  {
    icon: Wrench,
    title: 'Expert Team',
    description: 'Our experienced engineers and technicians are ready to support your most challenging projects.',
  },
];

export const galleryImages = [
  { id: 'gallery-1', src: findImage('gallery-1'), alt: 'Steel products stacked neatly', hint: 'steel products' },
  { id: 'gallery-2', src: findImage('gallery-2'), alt: 'Advanced CNC laser cutting machine in operation', hint: 'industrial machinery' },
  { id: 'gallery-3', src: findImage('gallery-3'), alt: 'A collection of precision-cut finished metal components', hint: 'metal parts' },
  { id: 'gallery-4', src: findImage('gallery-4'), alt: 'A delivery truck being loaded with steel sheets', hint: 'delivery truck' },
  { id: 'gallery-5', src: findImage('gallery-5'), alt: 'A large, custom-fabricated and welded steel structure', hint: 'welded structure' },
  { id: 'gallery-6', src: findImage('gallery-6'), alt: 'The interior of a busy metal workshop', hint: 'metal workshop' },
  { id: 'gallery-7', src: findImage('gallery-7'), alt: 'Close-up of stacked, heavy-duty steel plates', hint: 'steel plates' },
  { id: 'gallery-8', src: findImage('gallery-8'), alt: 'A single, intricately designed metal part showing precision engineering', hint: 'precision engineering' },
];
