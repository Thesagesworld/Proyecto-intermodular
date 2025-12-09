import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Competencia() {
  return (
    <section id="competencia" className="py-16 sm:py-24 bg-accent/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Competencia y Comparativa
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Aquí realizo un análisis comparativo de Benalmádena frente a sus destinos competidores.
          </p>
        </div>
        <Card className="shadow-lg">
          <CardContent className="p-0">
            <div className="grid grid-cols-4 items-center text-center font-semibold text-lg">
              <div className="p-4 border-b">
                <Badge variant="default" className="bg-primary text-primary-foreground text-base">
                  Benalmádena
                </Badge>
              </div>
              <div className="p-4 border-b text-muted-foreground">
                Fuengirola
              </div>
              <div className="p-4 border-b text-muted-foreground">
                Mijas
              </div>
              <div className="p-4 border-b text-muted-foreground">
                Torremolinos
              </div>
            </div>
            <div className="text-center p-8 text-muted-foreground">
              <p>Datos comparativos no disponibles actualmente.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
