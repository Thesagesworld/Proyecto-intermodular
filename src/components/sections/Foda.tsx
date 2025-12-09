import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldAlert, ShieldCheck, ThumbsDown, ThumbsUp } from 'lucide-react';

const fodaCategories = [
  { 
    title: 'Fortalezas', 
    icon: <ThumbsUp className="h-8 w-8 text-green-700" />,
    iconBg: 'bg-green-100',
    items: [
      "Existencia de amplia oferta de variedad de recursos",
      "Internacionalización del municipio",
      "Infraestructura de transporte y aparcamientos",
      "Activos en las redes sociales y mucho contenido",
      "Amplia oferta de espacios verdes"
    ]
  },
  { 
    title: 'Oportunidades', 
    icon: <ShieldCheck className="h-8 w-8 text-blue-700" />,
    iconBg: 'bg-blue-100',
    items: [
      "Inversión pública en el municipio",
      "Existencia de planes estratégicos y sostenibilidad",
      "Record batido de 25 millones de turistas al aeropuerto",
      "El proyecto de la reapertura del Tívoli",
      "Diversidad cultural"
    ]
  },
  { 
    title: 'Debilidades', 
    icon: <ThumbsDown className="h-8 w-8 text-red-700" />,
    iconBg: 'bg-red-100',
    items: [
      "Alta estacionalidad",
      "Ausencia de carriles bicis y de calzadas y poco mantenimiento de las calles",
      "Hacer Benalmádena más inclusiva",
      "Falta de coordinación en los canales de comunicación",
      "Espacios verdes desaprovechados"
    ]
  },
  { 
    title: 'Amenazas', 
    icon: <ShieldAlert className="h-8 w-8 text-orange-700" />,
    iconBg: 'bg-orange-100',
    items: [
      "Tensión política y falta de comunicación",
      "Incremento del nivel de vida",
      "Pérdida de la identidad",
      "Alta competencia de los destinos colindantes",
      "Cambio climático (sequía, olas de calor)",
      "Construcción masiva"
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
            He realizado un diagnóstico estratégico del municipio de Fuengirola, que presento a continuación.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fodaCategories.map((category) => (
            <Card key={category.title} className="shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="items-center text-center">
                <div className={`p-4 rounded-full ${category.iconBg} mb-4`}>
                    {category.icon}
                </div>
                <CardTitle className='text-2xl'>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-4">
                <ul className="space-y-3 text-muted-foreground list-disc pl-5">
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
