'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEnquiry } from '@/context/enquiry-context';

const EnquiryCartIcon = () => {
  const { itemCount } = useEnquiry();

  return (
    <Button asChild variant="ghost" size="icon">
      <Link href="/enquiry" className="relative">
        <ShoppingCart className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {itemCount}
          </span>
        )}
        <span className="sr-only">View Enquiry Cart</span>
      </Link>
    </Button>
  );
};

export default EnquiryCartIcon;
