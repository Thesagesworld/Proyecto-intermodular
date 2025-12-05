import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] items-center justify-center text-center bg-background p-4">
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Proyecto Intermodular
        </h1>
        <p className="mt-2 text-lg md:text-xl text-muted-foreground">
          Análisis turístico y sostenible 2025
        </p>
        <Card className="mt-8 max-w-2xl w-full text-center shadow-md">
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
