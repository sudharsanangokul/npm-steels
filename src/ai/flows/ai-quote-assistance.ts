'use server';

/**
 * @fileOverview This file defines a Genkit flow for AI-powered quote assistance.
 *
 * - aiQuoteAssistance - A function that orchestrates the quote assistance process.
 * - AIQuoteAssistanceInput - The input type for the aiQuoteAssistance function.
 * - AIQuoteAssistanceOutput - The return type for the aiQuoteAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIQuoteAssistanceInputSchema = z.object({
  productType: z.string().describe('The type of steel product required (e.g., HR Sheet, CR Sheet).'),
  application: z.string().describe('The intended application or use of the steel product.'),
  manufacturingProcess: z.string().describe('The manufacturing process to be used (e.g., laser cutting, welding).'),
  desiredOutcome: z.string().describe('The desired outcome or specifications for the final product.'),
  constraints: z.string().optional().describe('Any constraints or limitations on dimensions or materials.'),
});
export type AIQuoteAssistanceInput = z.infer<typeof AIQuoteAssistanceInputSchema>;

const AIQuoteAssistanceOutputSchema = z.object({
  suggestedDimensions: z.string().describe('AI-suggested dimensions for optimal manufacturing, in millimeters.'),
  reasoning: z.string().describe('Explanation of why these dimensions are recommended.'),
  additionalConsiderations: z
    .string()
    .optional()
    .describe('Additional factors to consider for the quote request and manufacturing process.'),
});
export type AIQuoteAssistanceOutput = z.infer<typeof AIQuoteAssistanceOutputSchema>;

export async function aiQuoteAssistance(input: AIQuoteAssistanceInput): Promise<AIQuoteAssistanceOutput> {
  return aiQuoteAssistanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiQuoteAssistancePrompt',
  input: {schema: AIQuoteAssistanceInputSchema},
  output: {schema: AIQuoteAssistanceOutputSchema},
  prompt: `You are an AI assistant designed to help customers determine the optimal dimensions for their steel product needs.

  Based on the customer's input, provide a suggested dimension, a reason for that dimension, and additional considerations for the quote request.

  Product Type: {{{productType}}}
  Application: {{{application}}}
  Manufacturing Process: {{{manufacturingProcess}}}
  Desired Outcome: {{{desiredOutcome}}}
  Constraints: {{{constraints}}}

  Respond with a complete and detailed explanation.
  `,
});

const aiQuoteAssistanceFlow = ai.defineFlow(
  {
    name: 'aiQuoteAssistanceFlow',
    inputSchema: AIQuoteAssistanceInputSchema,
    outputSchema: AIQuoteAssistanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
