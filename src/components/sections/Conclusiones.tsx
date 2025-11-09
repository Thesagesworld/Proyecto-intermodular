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
            Síntesis final del análisis y próximos pasos.
          </p>
        </div>
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <BookCheck className="h-8 w-8 text-secondary" />
            <CardTitle>Reflexión Personal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
                <div className="bg-gray-200 h-4 w-full rounded-md animate-pulse"></div>
                <div className="bg-gray-200 h-4 w-5/6 rounded-md animate-pulse"></div>
                <div className="bg-gray-200 h-4 w-full rounded-md animate-pulse"></div>
                <div className="bg-gray-200 h-4 w-4/6 rounded-md animate-pulse"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
