'use client';

import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface EnquiryItem {
  product: Product;
  quantity: number;
}

interface EnquiryContextType {
  enquiryItems: EnquiryItem[];
  addToEnquiry: (product: Product, quantity?: number) => void;
  removeFromEnquiry: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearEnquiry: () => void;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const addToEnquiry = useCallback((product: Product, quantity = 1) => {
    setEnquiryItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { product, quantity }];
    });
    toast({
      title: "Product Added",
      description: `${product.name} has been added to your enquiry list.`,
    });
    setIsCartOpen(true);
  }, [toast]);

  const removeFromEnquiry = useCallback((productId: string) => {
    setEnquiryItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
    toast({
      title: "Product Removed",
      variant: 'destructive',
    });
  }, [toast]);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromEnquiry(productId);
      return;
    }
    setEnquiryItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeFromEnquiry]);

  const clearEnquiry = useCallback(() => {
    setEnquiryItems([]);
  }, []);

  const itemCount = useMemo(() => {
    return enquiryItems.reduce((total, item) => total + item.quantity, 0);
  }, [enquiryItems]);

  const value = useMemo(() => ({
    enquiryItems,
    addToEnquiry,
    removeFromEnquiry,
    updateQuantity,
    clearEnquiry,
    itemCount,
    isCartOpen,
    setIsCartOpen,
  }), [enquiryItems, addToEnquiry, removeFromEnquiry, updateQuantity, clearEnquiry, itemCount, isCartOpen, setIsCartOpen]);

  return (
    <EnquiryContext.Provider value={value}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (context === undefined) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
}
