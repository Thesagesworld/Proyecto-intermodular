import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-background p-4 md:py-12">
      <main className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Proyecto Intermodular
        </h1>
        <p className="mt-2 text-lg md:text-xl text-muted-foreground">
          Análisis turístico y sostenible 2025
        </p>
        <Card className="mt-8 w-full text-center shadow-md">
          <CardContent className="p-6">
            <p className="text-muted-foreground">
              Bitácora desarrollada por <span className="font-semibold text-foreground">María Fernanda Vargas León</span>, alumna de 2º de Guía, Información y Asistencias Turísticas.
              <br />
              Proyecto realizado en grupo (4 integrantes).
              <br />
              Este espacio recoge mis aportaciones, reflexiones y evolución personal durante el proyecto.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 w-full text-left shadow-md">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="hover:no-underline p-6">
                <CardHeader className="flex flex-row items-center gap-4 p-0">
                  <HelpCircle className="h-6 w-6 text-primary" />
                  <CardTitle>El porqué de este proyecto</CardTitle>
                </CardHeader>
              </AccordionTrigger>
              <AccordionContent>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground">
                    El motivo de este proyecto nace de la necesidad de darle un nuevo enfoque al destino y hacerlo más atractivo para el público actual. Para conseguirlo, es importante investigar bien y analizar la situación utilizando herramientas como el PESTEL, el DAFO o el ciclo de vida del destino. Como estamos trabajando con un lugar que ya existe, lo que buscamos es ver cómo aprovechar lo que ya tiene, detectar sus puntos fuertes y sus carencias, y a partir de ahí proponer mejoras que realmente aporten valor y lo hagan destacar.
                  </p>
                </CardContent>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Link href="/pestel" passHref>
          <Button className="mt-8" size="lg">
            Entrar al proyecto
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </main>
    </div>
  );
}
