import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookCheck } from 'lucide-react';

export function Conclusiones() {
  return (
    <section id="conclusiones" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Conclusiones y Reflexión
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Aquí presento la síntesis final de mi análisis y los próximos pasos.
          </p>
        </div>
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <BookCheck className="h-8 w-8 text-secondary" />
            <CardTitle>Reflexión Personal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-muted-foreground">
              <p>
                Benalmádena, con su gran oferta turística, se enfrenta al reto de equilibrar su éxito con la sostenibilidad, especialmente ante la crisis hídrica y la masificación.
              </p>
              <p>
                Para seguir siendo competitivo, el destino debe mejorar su estrategia digital, que actualmente muestra un bajo engagement, y diversificar su modelo para reducir la estacionalidad.
              </p>
              <p>
                Es crucial gestionar los recursos de forma más eficiente y mejorar la convivencia entre turistas y residentes para asegurar su futuro.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
