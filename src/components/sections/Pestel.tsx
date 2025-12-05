import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Building, Globe, Landmark, Laptop, Leaf } from 'lucide-react';

const pestelFactors = [
  { title: 'Político', icon: <Landmark className="h-8 w-8 text-primary" /> },
  { title: 'Económico', icon: <BarChart3 className="h-8 w-8 text-primary" /> },
  { title: 'Sociocultural', icon: <Globe className="h-8 w-8 text-primary" /> },
  { title: 'Tecnológico', icon: <Laptop className="h-8 w-8 text-primary" /> },
  { title: 'Medioambiental', icon: <Leaf className="h-8 w-8 text-primary" /> },
  { title: 'Legal', icon: <Building className="h-8 w-8 text-primary" /> },
];

export function Pestel() {
  return (
    <section id="pestel" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Análisis PESTEL
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Contexto macroeconómico del destino.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {pestelFactors.map((factor) => (
            <Card key={factor.title} className="text-center p-4 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center justify-center p-2">
                 <div className="mb-3 rounded-full bg-accent p-3">
                    {factor.icon}
                 </div>
                <CardTitle className="text-lg">{factor.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-2 h-24">
                <div className="bg-gray-100 h-full w-full rounded-md animate-pulse"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
