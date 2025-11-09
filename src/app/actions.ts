"use server";

import { z } from "zod";
import { generateTourismQuiz } from "@/ai/flows/generate-tourism-quiz";

const GenerateTourismQuizInputSchema = z.object({
  topic: z.string().min(3, "El tema debe tener al menos 3 caracteres."),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  format: z.enum(['multiple choice', 'true/false']),
  numberOfQuestions: z.number().min(1).max(20),
});

export async function generateQuizAction(input: {
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  format: 'multiple choice' | 'true/false';
  numberOfQuestions: number;
}) {
  const validation = GenerateTourismQuizInputSchema.safeParse(input);

  if (!validation.success) {
    throw new Error(validation.error.errors.map(e => e.message).join(', '));
  }

  try {
    const result = await generateTourismQuiz(validation.data);
    return result;
  } catch (error) {
    console.error("Error generating quiz:", error);
    throw new Error("No se pudo generar el cuestionario. Inténtalo de nuevo.");
  }
}
