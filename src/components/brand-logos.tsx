import Image from 'next/image';

const distributors = [
  { name: 'SAIL', logo: '/logos/sail.png', hint: 'SAIL logo' },
  { name: 'AM/NS India', logo: '/logos/amns.png', hint: 'AMNS India logo' },
  { name: 'Jindal Steel & Power', logo: '/logos/jindal.png', hint: 'Jindal Steel Power logo' },
  { name: 'Evonith', logo: '/logos/evonith.png', hint: 'Evonith Uttam logo' },
  { name: 'Tata Steel', logo: '/logos/tata-steel.png', hint: 'Tata Steel logo' },
  { name: 'NMDC', logo: '/logos/nmdc.png', hint: 'NMDC logo' },
];

const otherBrands = [
  { name: 'JSW', logo: '/logos/jsw.png', hint: 'JSW logo' },
  { name: 'Suryadev', logo: '/logos/suryadev.png', hint: 'Suryadev logo' },
  { name: 'Pulkit', logo: '/logos/pulkit.png', hint: 'Pulkit TMT Bars logo' },
  { name: 'JFE', logo: '/logos/jfe.png', hint: 'JFE logo' },
  { name: 'ARS Steel', logo: '/logos/ars-steel.png', hint: 'ARS Steel logo' },
  { name: 'MTC Group', logo: '/logos/mtc-group.png', hint: 'MTC Group logo' },
];

export function BrandLogos() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Authorised Distributors */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-12 duration-500">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-center mb-8">Authorised Distributors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
            {distributors.map(brand => (
              <div key={brand.name} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <Image 
                  src={`https://placehold.co/150x60/png?text=${brand.name.replace(' ','+')}`}
                  alt={`${brand.name} logo`}
                  width={150}
                  height={60}
                  className="object-contain"
                  data-ai-hint={brand.hint}
                />
              </div>
            ))}
          </div>
        </div>
        
        <hr className="border-t my-12" />

        {/* Brands We Also Deal In */}
        <div className="animate-in fade-in slide-in-from-bottom-12 duration-500" style={{animationDelay: '200ms'}}>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-center mb-8">Brands That We Also Deal In</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
            {otherBrands.map(brand => (
              <div key={brand.name} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
                 <Image 
                  src={`https://placehold.co/150x60/png?text=${brand.name.replace(' ','+')}`}
                  alt={`${brand.name} logo`}
                  width={150}
                  height={60}
                  className="object-contain"
                  data-ai-hint={brand.hint}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}