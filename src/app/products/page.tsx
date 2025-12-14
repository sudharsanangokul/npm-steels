import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { PageHeader } from '@/components/page-header';
import { FadeIn } from '@/components/fade-in';

export const metadata = {
  title: 'Our Products | NTM Metals',
  description: 'Explore our wide range of high-quality steel products, including HR Sheets, CR Sheets, Checker Plates, GI Sheets, SS Sheets, and Japan Sheets.',
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader 
        title="Our Steel Products"
        subtitle="Explore our comprehensive inventory of premium quality steel sheets."
      />
      <section id="products-grid">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <FadeIn key={product.id} delay={index * 100}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
