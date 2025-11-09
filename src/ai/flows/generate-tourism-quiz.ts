'use server';

/**
 * @fileOverview An AI agent for generating tourism quizzes.
 *
 * - generateTourismQuiz - A function that generates a tourism quiz based on user-specified parameters.
 * - GenerateTourismQuizInput - The input type for the generateTourismQuiz function.
 * - GenerateTourismQuizOutput - The return type for the generateTourismQuiz function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTourismQuizInputSchema = z.object({
  topic: z.string().describe('The topic of the tourism quiz.'),
  difficulty: z
    .enum(['easy', 'medium', 'hard'])
    .describe('The difficulty level of the quiz.'),
  format: z
    .enum(['multiple choice', 'true/false'])
    .describe('The format of the quiz (multiple choice or true/false).'),
  numberOfQuestions: z.number().min(1).max(20).default(10).describe('The number of questions in the quiz (between 1 and 20).'),
});
export type GenerateTourismQuizInput = z.infer<typeof GenerateTourismQuizInputSchema>;

const GenerateTourismQuizOutputSchema = z.object({
  quiz: z.string().describe('The generated tourism quiz.'),
});
export type GenerateTourismQuizOutput = z.infer<typeof GenerateTourismQuizOutputSchema>;

export async function generateTourismQuiz(
  input: GenerateTourismQuizInput
): Promise<GenerateTourismQuizOutput> {
  return generateTourismQuizFlow(input);
}

const generateTourismQuizPrompt = ai.definePrompt({
  name: 'generateTourismQuizPrompt',
  input: {schema: GenerateTourismQuizInputSchema},
  output: {schema: GenerateTourismQuizOutputSchema},
  prompt: `You are a quiz generator specializing in tourism. Generate a quiz based on the following parameters:

Topic: {{{topic}}}
Difficulty: {{{difficulty}}}
Format: {{{format}}}
Number of Questions: {{{numberOfQuestions}}}

The quiz should be engaging and informative, providing a customized learning experience for users. Ensure that the questions are appropriate for the specified difficulty level and format.

Quiz:`, // Keep the "Quiz:" prefix because the output schema says the output should be prefixed by "Quiz:"
});

const generateTourismQuizFlow = ai.defineFlow(
  {
    name: 'generateTourismQuizFlow',
    inputSchema: GenerateTourismQuizInputSchema,
    outputSchema: GenerateTourismQuizOutputSchema,
  },
  async input => {
    const {output} = await generateTourismQuizPrompt(input);
    return output!;
  }
);
