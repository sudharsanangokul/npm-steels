import { PageHeader } from '@/components/page-header';
import { RequestQuoteForm } from '@/components/request-quote-form';

export const metadata = {
  title: 'Request a Quote | NTM Metals',
  description: 'Get a competitive quote for your steel sheet and fabrication needs. Fill out our form to get started.',
};

export default function RequestQuotePage() {
  return (
    <>
      <PageHeader 
        title="Request a Quote"
        subtitle="Fill out the form below, and our team will get back to you with a competitive quote."
      />
      <section id="quote-form">
        <div className="container mx-auto max-w-4xl">
            <RequestQuoteForm />
        </div>
      </section>
    </>
  );
}
