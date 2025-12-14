import { About } from '@/components/page/home/about';
import { CtaBanner } from '@/components/page/home/cta-banner';
import { Hero } from '@/components/page/home/hero';
import { ProductHighlights } from '@/components/page/home/product-highlights';
import { ServicesOverview } from '@/components/page/home/services-overview';
import { WhyChooseUs } from '@/components/page/home/why-choose-us';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductHighlights />
      <ServicesOverview />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
