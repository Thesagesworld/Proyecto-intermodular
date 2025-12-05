import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldAlert, ShieldCheck, ThumbsDown, ThumbsUp } from 'lucide-react';

const dafoCategories = [
  { title: 'Debilidades', icon: <ThumbsDown className="h-6 w-6 text-red-600" /> },
  { title: 'Amenazas', icon: <ShieldAlert className="h-6 w-6 text-orange-600" /> },
  { title: 'Fortalezas', icon: <ThumbsUp className="h-6 w-6 text-green-600" /> },
  { title: 'Oportunidades', icon: <ShieldCheck className="h-6 w-6 text-blue-600" /> },
];

export function Dafo() {
  return (
    <section id="dafo" className="py-16 sm:py-24 bg-accent/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Análisis DAFO
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Diagnóstico estratégico del destino.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dafoCategories.map((category) => (
            <Card key={category.title} className="shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                {category.icon}
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mt-4 text-muted-foreground list-disc pl-5 h-32">
                    <li className="bg-gray-200 h-4 w-5/6 rounded-full animate-pulse"></li>
                    <li className="bg-gray-200 h-4 w-4/6 rounded-full animate-pulse"></li>
                    <li className="bg-gray-200 h-4 w-5/6 rounded-full animate-pulse"></li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
