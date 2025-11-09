'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateQuizAction } from '@/app/actions';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Separator } from '../ui/separator';

const formSchema = z.object({
  topic: z.string().min(3, 'El tema debe tener al menos 3 caracteres.'),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  format: z.enum(['multiple choice', 'true/false']),
  numberOfQuestions: z.coerce.number().min(1).max(20),
});

type FormValues = z.infer<typeof formSchema>;

export function Quiz() {
  const [quiz, setQuiz] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: 'Fuengirola',
      difficulty: 'easy',
      format: 'multiple choice',
      numberOfQuestions: 5,
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setQuiz(null);
    try {
      const result = await generateQuizAction(values);
      setQuiz(result.quiz);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error al generar el quiz',
        description:
          error instanceof Error
            ? error.message
            : 'Ocurrió un error inesperado.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="quiz" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Generador de Quiz de Turismo
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Pon a prueba tus conocimientos sobre Fuengirola. ¡Genera un quiz
            personalizado!
          </p>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Configura tu Quiz</CardTitle>
            <CardDescription>
              Elige un tema, dificultad y formato para tu cuestionario.
            </CardDescription>
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
                        <Input placeholder="Ej: Historia de Fuengirola" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="difficulty"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dificultad</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona dificultad" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="easy">Fácil</SelectItem>
                            <SelectItem value="medium">Media</SelectItem>
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
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona formato" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="multiple choice">
                              Opción Múltiple
                            </SelectItem>
                            <SelectItem value="true/false">
                              Verdadero/Falso
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="numberOfQuestions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nº de Preguntas</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" max="20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button type="submit" disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {isLoading ? 'Generando...' : 'Generar Quiz'}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>

        {isLoading && (
          <div className="mt-8 text-center">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">
              Creando tu quiz...
            </p>
          </div>
        )}

        {quiz && (
          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle>Resultado del Quiz</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-blue max-w-none dark:prose-invert whitespace-pre-wrap">
                {quiz}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
