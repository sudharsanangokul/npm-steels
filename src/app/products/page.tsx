'use client';

import { products } from '@/lib/data';
import { PageHeader } from '@/components/page-header';
import { ProductCard } from '@/components/product-card';
import { FadeIn } from '@/components/fade-in';

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        description="Explore our wide range of high-quality steel products, available in various sizes and grades to meet your specific needs."
      />
      <section className="py-12 sm:py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.1}>
                <div id={product.slug}>
                  <ProductCard product={product} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
