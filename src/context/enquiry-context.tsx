'use client';

import type { Product, EnquiryItem } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import React, { createContext, useContext, useState, useMemo, useCallback, useEffect } from 'react';

interface EnquiryContextType {
  enquiryItems: EnquiryItem[];
  addToEnquiry: (product: Product, quantity?: number) => void;
  removeFromEnquiry: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearEnquiry: () => void;
  itemCount: number;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

const isClient = typeof window !== 'undefined';

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>(() => {
    if (!isClient) return [];
    try {
      const item = window.localStorage.getItem('enquiryCart');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });
  const { toast } = useToast();

  useEffect(() => {
    if(isClient) {
        window.localStorage.setItem('enquiryCart', JSON.stringify(enquiryItems));
    }
  }, [enquiryItems]);


  const addToEnquiry = useCallback((product: Product, quantity: number = 1) => {
    setEnquiryItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
    toast({
      title: "Item Added to Enquiry",
      description: `${product.name} has been added to your enquiry list.`,
    });
  }, [toast]);

  const removeFromEnquiry = useCallback((productId: string) => {
    setEnquiryItems(prevItems => prevItems.filter(item => item.id !== productId));
    toast({
        title: "Item Removed",
        description: "The item has been removed from your enquiry list.",
        variant: 'destructive'
    });
  }, [toast]);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromEnquiry(productId);
      return;
    }
    setEnquiryItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
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
    itemCount
  }), [enquiryItems, addToEnquiry, removeFromEnquiry, updateQuantity, clearEnquiry, itemCount]);

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
