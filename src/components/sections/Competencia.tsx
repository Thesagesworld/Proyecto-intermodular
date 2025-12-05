import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Users, MapPin, BedDouble, Waves, VenetianMask } from 'lucide-react';

const competitors = [
  { name: 'Benalmádena', population: '75,801', beaches: '20 km', hotelBeds: '18,000', attraction: 'Puerto Marina, Teleférico' },
  { name: 'Mijas', population: '91,691', beaches: '12 km', hotelBeds: '15,000', attraction: 'Mijas Pueblo, Campos de Golf' },
  { name: 'Torremolinos', population: '70,434', beaches: '7 km', hotelBeds: '20,000', attraction: 'Vida nocturna, Playamar' },
];

const fuengirolaData = {
  name: 'Fuengirola',
  population: '85,598',
  beaches: '8 km',
  hotelBeds: '11,000',
  attraction: 'Castillo Sohail, Bioparc',
};

const comparisonCriteria = [
  {
    label: 'Población',
    icon: <Users className="h-5 w-5 text-secondary" />,
    fuengirolaValue: fuengirolaData.population,
    getCompetitorValue: (c: typeof competitors[0]) => c.population,
  },
  {
    label: 'Playas',
    icon: <Waves className="h-5 w-5 text-secondary" />,
    fuengirolaValue: fuengirolaData.beaches,
    getCompetitorValue: (c: typeof competitors[0]) => c.beaches,
  },
  {
    label: 'Plazas Hoteleras',
    icon: <BedDouble className="h-5 w-5 text-secondary" />,
    fuengirolaValue: fuengirolaData.hotelBeds,
    getCompetitorValue: (c: typeof competitors[0]) => c.hotelBeds,
  },
  {
    label: 'Atractivo Principal',
    icon: <VenetianMask className="h-5 w-5 text-secondary" />,
    fuengirolaValue: fuengirolaData.attraction,
    getCompetitorValue: (c: typeof competitors[0]) => c.attraction,
  },
];

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
            <div className="grid grid-cols-4 items-center text-center font-semibold text-lg">
              <div className="p-4 border-b">
                <Badge variant="default" className="bg-primary text-primary-foreground text-base">
                  Fuengirola
                </Badge>
              </div>
              {competitors.map((city) => (
                <div key={city.name} className="p-4 border-b text-muted-foreground">
                  {city.name}
                </div>
              ))}
            </div>

            {comparisonCriteria.map((criterion, index) => (
              <div key={index} className="grid grid-cols-4 items-center text-center border-b last:border-b-0">
                <div className="flex items-center gap-3 p-4 font-medium text-left bg-accent/50">
                  {criterion.icon}
                  <span>{criterion.label}</span>
                </div>
                <div className="p-4 text-foreground font-semibold">{criterion.fuengirolaValue}</div>
                {competitors.map((competitor) => (
                  <div key={competitor.name} className="p-4 text-muted-foreground">
                    {criterion.getCompetitorValue(competitor)}
                  </div>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
