import { PageHeader } from '@/components/page-header';
import { AiAssistantForm } from '@/components/ai-assistant-form';
import { Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'AI Quote Assistant | NTM Metals',
  description: 'Use our AI-powered tool to get recommendations for the optimal steel product dimensions based on your specific application and manufacturing process.',
};

export default function AiQuoteAssistantPage() {
  return (
    <>
      <PageHeader 
        title="AI Quote Assistant"
        subtitle="Get instant recommendations for optimal product dimensions."
      />
      <section id="ai-assistant">
        <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AiAssistantForm />
          </div>
          <div className='space-y-6'>
            <Card className="bg-accent/10 border-accent">
                <CardHeader className='flex-row gap-4 items-center'>
                    <Lightbulb className="h-8 w-8 text-accent" />
                    <CardTitle className='font-headline text-accent'>How It Works</CardTitle>
                </CardHeader>
                <CardContent className='space-y-2 text-muted-foreground'>
                    <p><strong>1. Describe Your Project:</strong> Provide details about the product, application, and process.</p>
                    <p><strong>2. Get AI Suggestions:</strong> Our AI analyzes your input to recommend optimal dimensions.</p>
                    <p><strong>3. Refine Your Quote:</strong> Use the suggestions to create a more accurate quote request.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className='font-headline'>Why use the assistant?</CardTitle>
                    <CardDescription>Optimize material usage, reduce waste, and potentially lower your manufacturing costs by starting with the right dimensions.</CardDescription>
                </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
