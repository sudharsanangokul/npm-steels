import { Construction, Flame, Layers, Move3d, Scissors, Wrench } from "lucide-react";
import type { Product, Service, MegaMenuProduct } from "./types";

export const products: Product[] = [
  {
    id: "hr-steel-sheet",
    name: "HR Steel Sheets",
    category: "Hot Rolled Steel",
    description: "High-strength hot rolled steel sheets, ideal for structural applications, construction, and heavy machinery where finish is less critical.",
    specs: {
      "Thickness": "1.6mm - 12mm",
      "Standard Sizes": "1220x2440mm, 1500x3000mm",
      "Grade": "IS 2062, IS 1079",
    },
  },
  {
    id: "cr-steel-sheet",
    name: "CR Steel Sheets",
    category: "Cold Rolled Steel",
    description: "Cold rolled steel sheets with a superior surface finish and tighter tolerances. Perfect for automotive parts, appliances, and furniture.",
    specs: {
      "Thickness": "0.4mm - 3.0mm",
      "Standard Sizes": "1220x2440mm",
      "Grade": "IS 513 (D, DD, EDD)",
    },
  },
  {
    id: "gi-steel-sheet",
    name: "GI Steel Sheets",
    category: "Galvanized Iron",
    description: "Zinc-coated steel sheets offering excellent corrosion resistance. Widely used for roofing, ducting, and outdoor applications.",
    specs: {
      "Thickness": "0.3mm - 2.0mm",
      "Zinc Coating": "80-275 GSM",
      "Grade": "IS 277",
    },
  },
  {
    id: "ss-steel-sheet-304",
    name: "Stainless Steel 304",
    category: "Stainless Steel",
    description: "Versatile and widely used stainless steel with excellent corrosion resistance and formability. Ideal for kitchen equipment, architectural paneling, and chemical tanks.",
    specs: {
      "Thickness": "0.5mm - 6.0mm",
      "Finish": "2B, No. 4, BA, Mirror",
      "Grade": "AISI 304, 304L",
    },
  },
    {
    id: "ss-steel-sheet-316",
    name: "Stainless Steel 316",
    category: "Stainless Steel",
    description: "Marine-grade stainless steel with superior corrosion and pitting resistance due to added molybdenum. Suited for marine, chemical, and pharmaceutical environments.",
    specs: {
      "Thickness": "1.0mm - 10mm",
      "Finish": "2B, No. 4",
      "Grade": "AISI 316, 316L",
    },
  },
  {
    id: "japan-steel-sheet",
    name: "High-Tensile Japan Steel",
    category: "Specialty Steel",
    description: "Imported high-tensile steel from Japan, known for its exceptional strength-to-weight ratio. Used in high-performance automotive and structural components.",
    specs: {
      "Thickness": "0.8mm - 4.5mm",
      "Tensile Strength": "590MPa - 980MPa",
      "Grade": "JIS G3131, SAPH series",
    },
  },
  {
    id: 'e250a',
    name: 'E250A',
    category: 'IS 2062 Mild Steel Plates',
    description: 'Mild Steel plates are offered in a variety of thicknesses, lengths, radii, dimensions, diameters, and more. These plates are utilized in various industries due to their excellent workability, formability, durability, installation, machinability, weldability, and fabrication properties.',
    specs: {
      "Product Name": "IS 2062 Gr A",
      "Thickness": "5 mm - 150 mm",
      "Length": "6000 mm - 12000 mm",
      "Width": "1500 mm - 3000 mm"
    }
  }
];

export const services: Service[] = [
    {
        id: "laser-cutting",
        name: "Laser Cutting",
        description: "High-precision laser cutting for intricate designs and clean edges on a variety of metal thicknesses.",
        icon: Scissors
    },
    {
        id: "plasma-cutting",
        name: "Plasma Cutting",
        description: "Efficient and fast cutting for thicker metal plates, ideal for heavy-duty industrial components.",
        icon: Flame
    },
    {
        id: "cnc-bending",
        name: "CNC Bending",
        description: "Accurate and repeatable bending and forming of sheet metal parts with our advanced CNC press brakes.",
        icon: Move3d
    },
    {
        id: "welding",
        name: "Welding",
        description: "Professional MIG, TIG, and spot welding services to assemble components with strength and precision.",
        icon: Construction,
    },
    {
        id: "custom-fabrication",
        name: "Custom Fabrication",
        description: "End-to-end fabrication solutions, from design assistance to final assembly, for your custom projects.",
        icon: Wrench
    },
];

export const megaMenuProducts: MegaMenuProduct[] = [
    {
        title: "HR Coils / Sheets / Plates / Slabs",
        subCategories: ["E250A", "E250BR", "Chequered Plate", "HR Slabs up to 600mm thickness", "HRPO / CRCA Coils", "GI / GP Coils"]
    },
    {
        title: "Quenched & Tempered High Yield Strength Plates",
        subCategories: []
    },
    {
        title: "Wear Resistant Plates",
        subCategories: []
    },
    {
        title: "Structural Plates",
        subCategories: []
    },
    {
        title: "High Manganese Plates",
        subCategories: []
    },
    {
        title: "Boiler Quality Plates",
        subCategories: []
    },
    {
        title: "Corten Plates",
        subCategories: []
    },
    {
        title: "Special Plates",
        subCategories: []
    },
    {
        title: "Equivalent Grades",
        subCategories: []
    },
    {
        title: "MS Structurals",
        subCategories: []
    }
];
