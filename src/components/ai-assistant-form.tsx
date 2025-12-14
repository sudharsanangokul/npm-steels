'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Sparkles } from 'lucide-react';

import { aiQuoteAssistance, AIQuoteAssistanceInput, AIQuoteAssistanceOutput } from '@/ai/flows/ai-quote-assistance';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { products } from '@/lib/data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useToast } from '@/hooks/use-toast';
import { Separator } from './ui/separator';

const formSchema = z.object({
  productType: z.string().min(1, { message: 'Please select a product type.' }),
  application: z.string().min(3, { message: 'Please describe the application.' }),
  manufacturingProcess: z.string().min(3, { message: 'Please describe the manufacturing process.' }),
  desiredOutcome: z.string().min(3, { message: 'Please describe the desired outcome.' }),
  constraints: z.string().optional(),
});

export function AiAssistantForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AIQuoteAssistanceOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productType: '',
      application: '',
      manufacturingProcess: '',
      desiredOutcome: '',
      constraints: '',
    },
  });

  async function onSubmit(values: AIQuoteAssistanceInput) {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await aiQuoteAssistance(values);
      setResult(response);
    } catch (error) {
      console.error('AI Assistance Error:', error);
      toast({
        title: 'An Error Occurred',
        description: 'Could not get AI suggestions. Please try again later.',
        variant: 'destructive',
      });
    }
    setIsLoading(false);
  }

  return (
    <Card className="shadow-lg">
        <CardHeader>
            <CardTitle className='font-headline text-2xl'>Project Details</CardTitle>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                control={form.control}
                name="productType"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Product Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a steel product" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {products.map(p => <SelectItem key={p.id} value={p.name}>{p.name}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="application"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Intended Application</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., Automotive chassis component, roofing panel" {...field} />
                    </FormControl>
                    <FormDescription>What will the final product be used for?</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="manufacturingProcess"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Manufacturing Process</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., Laser cutting and welding" {...field} />
                    </FormControl>
                     <FormDescription>How will you work with the material?</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="desiredOutcome"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Desired Outcome</FormLabel>
                    <FormControl>
                        <Textarea placeholder="e.g., A lightweight but strong bracket with minimal material waste." {...field} />
                    </FormControl>
                    <FormDescription>What is the primary goal for the final part?</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="constraints"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Constraints (Optional)</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., Must not exceed 500mm in length" {...field} />
                    </FormControl>
                    <FormDescription>Any limitations on dimensions, weight, or material?</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" size="lg" className="w-full font-bold" disabled={isLoading}>
                    {isLoading ? (
                        <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Analyzing...
                        </>
                    ) : (
                        <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Get AI Suggestions
                        </>
                    )}
                </Button>
            </form>
            </Form>

            {result && (
                <div className="mt-8 pt-8 border-t">
                    <h3 className="font-headline text-2xl font-bold text-primary flex items-center gap-2 mb-4"><Sparkles className='text-accent'/> AI Recommendation</h3>
                    <div className='space-y-4 text-sm'>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <p className="font-bold text-green-800">Suggested Dimensions:</p>
                            <p className="font-mono text-lg text-green-900">{result.suggestedDimensions}</p>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="font-bold text-blue-800">Reasoning:</p>
                            <p className="text-blue-900">{result.reasoning}</p>
                        </div>
                        {result.additionalConsiderations && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <p className="font-bold text-yellow-800">Additional Considerations:</p>
                            <p className="text-yellow-900">{result.additionalConsiderations}</p>
                        </div>
                        )}
                    </div>
                </div>
            )}
        </CardContent>
    </Card>
  );
}
