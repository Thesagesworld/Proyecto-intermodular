import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const competitors = ['Málaga', 'Benalmádena', 'Mijas', 'Torremolinos'];

export function Competencia() {
  return (
    <section id="competencia" className="py-16 sm:py-24 bg-accent/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Competencia y Comparativa
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Análisis comparativo de Fuengirola frente a destinos competidores.
          </p>
        </div>
        <Card className="shadow-lg">
          <CardContent className="p-0">
             <div className="grid grid-cols-5 items-center text-center font-semibold">
                <div className="p-4"><Badge variant="default" className="bg-primary text-primary-foreground text-base">Fuengirola</Badge></div>
                {competitors.map((city) => (
                    <div key={city} className="p-4 text-muted-foreground">{city}</div>
                ))}
            </div>
            <Separator />
            {Array(4).fill(0).map((_, index) => (
                 <div key={index} className="grid grid-cols-5 items-center text-center border-b last:border-b-0">
                    <div className="p-4 bg-gray-100 h-10 w-full animate-pulse"></div>
                    <div className="p-4 bg-gray-50 h-10 w-full animate-pulse"></div>
                    <div className="p-4 bg-gray-100 h-10 w-full animate-pulse"></div>
                    <div className="p-4 bg-gray-50 h-10 w-full animate-pulse"></div>
                    <div className="p-4 bg-gray-100 h-10 w-full animate-pulse"></div>
                </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
