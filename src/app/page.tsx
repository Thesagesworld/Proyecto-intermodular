import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, HelpCircle } from 'lucide-react';

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
           <CardHeader className="flex flex-row items-center gap-4">
            <HelpCircle className="h-6 w-6 text-primary" />
            <CardTitle>El porqué de este proyecto</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
             
            </p>
          </CardContent>
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
