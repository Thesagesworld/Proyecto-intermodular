import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldAlert, ShieldCheck, ThumbsDown, ThumbsUp } from 'lucide-react';

const fodaCategories = [
  { 
    title: 'Fortalezas', 
    icon: <ThumbsUp className="h-6 w-6 text-green-600" />,
    items: [
      "Variedad de alojamientos para diferentes presupuestos (hoteles, apartamentos, hostales, camping).",
      "Amplia oferta gastronómica con presencia de cocina local e internacional.",
      "Recursos naturales como playas bien cuidadas y un paseo marítimo atractivo.",
      "Actividades turísticas disponibles todo el año (deportivas, culturales, recreativas).",
      "Buen acceso por carretera y tren de cercanía, que conecta al aeropuerto y al ave (transporte público).",
      "Eventos locales que atraen tanto a residentes como a turistas (ferias, conciertos, festivales)."
    ]
  },
  { 
    title: 'Oportunidades', 
    icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
    items: [
      "Potenciar el turismo sostenible y cultural fuera de temporada.",
      "Crear rutas gastronómicas o experiencias locales guiadas.",
      "Mejorar la conexión entre barrios y zonas turísticas con transporte más frecuente.",
      "Promover eventos temáticos que diversifiquen la oferta (mercados artesanales, rutas históricas).",
      "Colaborar con negocios locales para paquetes turísticos integrados."
    ]
  },
  { 
    title: 'Debilidades', 
    icon: <ThumbsDown className="h-6 w-6 text-red-600" />,
    items: [
      "Zonas con saturación turística en temporada alta, como: Torreblanca‑Carvajal, Las Chozas.",
      "Presenta una escasa promoción de sus actividades fuera del ámbito local.",
      "Servicios de hotelería en barrios alejados del centro.",
      "Transporte urbano con horarios reducidos en las franjas horarias nocturnas durante invierno (en todas las líneas).",
      "Delimitación en la comunicación de transporte de autobuses con Las Lagunas y Fuengirola centro, sin que sea interurbano.",
      "Falta de trenes de Cercanías Renfe en franjas de alta demanda."
    ]
  },
  { 
    title: 'Amenazas', 
    icon: <ShieldAlert className="h-6 w-6 text-orange-600" />,
    items: [
      "Competencia con otros destinos costeros cercanos (como Marbella o Torremolinos).",
      "Dependencia del turismo estacional (verano principalmente).",
      "El aumento del turismo, si no se gestiona adecuadamente, puede provocar impactos medioambientales.",
      "Cambios en las preferencias de los turistas (más interés por experiencias únicas que por sol y playa).",
      "Eventos locales que atraen tanto a residentes como a turistas (ferias, conciertos, festivales)."
    ]
  },
];

export function Foda() {
  return (
    <section id="foda" className="py-16 sm:py-24 bg-accent/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Análisis FODA
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Diagnóstico estratégico del municipio de Fuengirola.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fodaCategories.map((category) => (
            <Card key={category.title} className="shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                {category.icon}
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 mt-4 text-muted-foreground list-disc pl-5">
                    {category.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
