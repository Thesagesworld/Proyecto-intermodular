import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Hotel, Euro, MapPin } from 'lucide-react';

const statsData = [
  { title: 'Llegadas de Turistas', icon: <Users className="h-7 w-7 text-secondary" /> },
  { title: 'Ocupación Hotelera', icon: <Hotel className="h-7 w-7 text-secondary" /> },
  { title: 'Gasto Medio por Turista', icon: <Euro className="h-7 w-7 text-secondary" /> },
  { title: 'Procedencia de Turistas', icon: <MapPin className="h-7 w-7 text-secondary" /> },
];

export function Stats() {
  return (
    <section id="stats" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Datos y Estadísticas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Indicadores clave del rendimiento turístico de Fuengirola.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <Card key={stat.title} className="shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold bg-gray-200 h-8 w-2/3 rounded-md animate-pulse"></div>
                <p className="text-xs text-muted-foreground bg-gray-200 h-4 w-1/2 mt-2 rounded-md animate-pulse"></p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
