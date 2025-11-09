'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Sparkles, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import { generateQuizAction } from '@/app/actions';

const quizFormSchema = z.object({
  topic: z.string().min(3, { message: 'El tema debe tener al menos 3 caracteres.' }),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  format: z.enum(['multiple choice', 'true/false']),
  numberOfQuestions: z.number().min(1).max(20),
});

type QuizFormValues = z.infer<typeof quizFormSchema>;

export function QuizGenerator() {
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<QuizFormValues>({
    resolver: zodResolver(quizFormSchema),
    defaultValues: {
      topic: 'Cultura de Benalmádena',
      difficulty: 'medium',
      format: 'multiple choice',
      numberOfQuestions: 5,
    },
  });

  async function onSubmit(values: QuizFormValues) {
    setIsLoading(true);
    setQuizResult(null);

    try {
      const result = await generateQuizAction(values);
      if (result && result.quiz) {
        setQuizResult(result.quiz);
      } else {
        throw new Error('La respuesta de la IA estaba vacía.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Un error desconocido ocurrió';
      toast({
        variant: 'destructive',
        title: 'Error al generar el cuestionario',
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="quiz" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-primary" />
            Generador de Cuestionarios Turísticos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Pon a prueba tus conocimientos sobre la zona con un cuestionario personalizado por IA.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Crea tu Cuestionario</CardTitle>
              <CardDescription>Define los parámetros para tu experiencia de aprendizaje.</CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tema</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: Gastronomía de Málaga" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="difficulty"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dificultad</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona dificultad" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="easy">Fácil</SelectItem>
                              <SelectItem value="medium">Medio</SelectItem>
                              <SelectItem value="hard">Difícil</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="format"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Formato</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona formato" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="multiple choice">Opción Múltiple</SelectItem>
                              <SelectItem value="true/false">Verdadero/Falso</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="numberOfQuestions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número de Preguntas: {field.value}</FormLabel>
                        <FormControl>
                           <Slider
                            min={1}
                            max={20}
                            step={1}
                            value={[field.value]}
                            onValueChange={(values) => field.onChange(values[0])}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generando...
                      </>
                    ) : (
                      'Generar Cuestionario'
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>

          <Card className="min-h-[400px] flex flex-col shadow-lg">
            <CardHeader>
              <CardTitle>Tu Cuestionario</CardTitle>
              <CardDescription>Aquí aparecerá tu cuestionario generado.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {isLoading && (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <Loader2 className="h-8 w-8 animate-spin mb-4" />
                  <p>La IA está preparando tus preguntas...</p>
                </div>
              )}
              {quizResult && (
                <div className="prose prose-sm max-w-none dark:prose-invert bg-secondary/50 p-4 rounded-md">
                    <pre className="whitespace-pre-wrap font-body text-sm bg-transparent border-0 p-0">{quizResult}</pre>
                </div>
              )}
              {!isLoading && !quizResult && (
                 <div className="flex items-center justify-center h-full text-center text-muted-foreground">
                    <p>Tu cuestionario está a solo un clic de distancia.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
