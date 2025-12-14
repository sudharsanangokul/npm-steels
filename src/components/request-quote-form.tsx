'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEnquiry } from '@/contexts/enquiry-context';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  product: z.string().optional(),
  thickness: z.string().optional(),
  dimensions: z.string().optional(),
  quantity: z.string().optional(),
  drawing: z.any().optional(),
  additionalNotes: z.string().optional(),
  enquiryItems: z.string().optional(),
});

export function RequestQuoteForm() {
  const { enquiryItems, clearEnquiry } = useEnquiry();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      product: '',
      thickness: '',
      dimensions: '',
      quantity: '',
      additionalNotes: '',
    },
  });

  useEffect(() => {
    if (enquiryItems.length > 0) {
      const itemsSummary = enquiryItems
        .map(item => `${item.product.name} (Qty: ${item.quantity})`)
        .join('\n');
      form.setValue('enquiryItems', `Enquiry for:\n${itemsSummary}`);
      form.setValue('additionalNotes', `Enquiry for:\n${itemsSummary}\n\n`);
    }
  }, [enquiryItems, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // This is a mock submission. In a real app, you would send this to your backend.
    console.log(values);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Quote Request Sent!",
      description: "Thank you! Our team will review your request and get back to you shortly.",
    });
    form.reset();
    clearEnquiry();
  }

  return (
    <Card className="shadow-lg">
        <CardHeader>
            <CardTitle className='font-headline text-2xl'>Your Details</CardTitle>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                        <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                        <Input placeholder="Acme Corporation" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                        <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>

                {enquiryItems.length === 0 && (
                    <>
                        <h3 className='font-headline text-xl font-semibold border-t pt-6'>Product Details</h3>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="product"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Required</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                    <SelectValue placeholder="Select a product" />
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
                            name="quantity"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quantity</FormLabel>
                                <FormControl>
                                <Input placeholder="e.g., 10 sheets or 500 kg" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="thickness"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Thickness (mm)</FormLabel>
                                <FormControl>
                                <Input placeholder="e.g., 3mm" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="dimensions"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Dimensions (mm)</FormLabel>
                                <FormControl>
                                <Input placeholder="e.g., 1250 x 2500" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        </div>
                    </>
                )}

                <FormField
                control={form.control}
                name="drawing"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Upload Drawing (PDF/JPG/DWG)</FormLabel>
                    <FormControl>
                        <Input type="file" {...form.register('drawing')} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="additionalNotes"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Additional Notes or Items</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="Please include any other details, requirements, or products for your enquiry."
                        rows={enquiryItems.length > 0 ? 8 : 4}
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <Button type="submit" size="lg" className="w-full font-bold" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Submitting...
                        </>
                    ) : 'Submit Quote Request'}
                </Button>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
