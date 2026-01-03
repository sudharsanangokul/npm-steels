'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { megaMenuProducts } from '@/lib/data';
import { cn } from '@/lib/utils';

export const ProductsMegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(megaMenuProducts[0].title);

  const getActiveSubCategories = () => {
    const active = megaMenuProducts.find(cat => cat.title === activeCategory);
    return active?.subCategories || [];
  };

  return (
    <div className="group relative">
      <Link
        href="/products"
        className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-red-600 flex items-center"
      >
        Products
      </Link>
      
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
        <div className="w-[600px] bg-white border border-gray-200 rounded-md shadow-lg grid grid-cols-2">
            {/* Left Column */}
            <div className="p-2 space-y-1">
                {megaMenuProducts.map(category => (
                    <button
                        key={category.title}
                        onMouseEnter={() => setActiveCategory(category.title)}
                        className={cn(
                            "w-full text-left p-3 text-sm font-bold text-white rounded-md flex justify-between items-center transition-colors",
                            activeCategory === category.title ? 'bg-red-600' : 'bg-red-500 hover:bg-red-600'
                        )}
                    >
                        <span>{category.title}</span>
                        <ChevronRight className="h-4 w-4" />
                    </button>
                ))}
            </div>
            {/* Right Column */}
            <div className="p-4">
                {getActiveSubCategories().length > 0 ? (
                    <ul className="space-y-2">
                        {getActiveSubCategories().map(sub => (
                            <li key={sub}>
                                <Link href="/products" className="text-sm text-gray-700 hover:text-red-600 hover:font-semibold">
                                    {sub}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="flex items-center justify-center h-full text-sm text-gray-500">
                        Select a category to see more.
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};