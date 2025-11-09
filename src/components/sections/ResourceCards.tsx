import Image from 'next/image';
import { Landmark, Leaf, Building2, Clock, CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const resources = [
  {
    title: 'Mezquita-Catedral de Córdoba',
    category: 'Patrimonio',
    icon: <Landmark className="h-6 w-6 text-primary" />,
    imageId: 'resource-mezquita',
    details: [
      { text: 'Abierto de 10:00 a 19:00', icon: <Clock className="h-4 w-4" /> },
      { text: 'Accesibilidad parcial', icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
    ],
  },
  {
    title: 'Parque Nacional de Doñana',
    category: 'Parque Natural',
    icon: <Leaf className="h-6 w-6 text-green-600" />,
    imageId: 'resource-donana',
    details: [
      { text: 'Visitas guiadas disponibles', icon: <Clock className="h-4 w-4" /> },
      { text: 'Prácticas sostenibles', icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
    ],
  },
  {
    title: 'Museo Picasso Málaga',
    category: 'Museo',
    icon: <Building2 className="h-6 w-6 text-blue-600" />,
    imageId: 'resource-picasso',
    details: [
      { text: 'Abierto de 10:00 a 20:00', icon: <Clock className="h-4 w-4" /> },
      { text: 'Totalmente accesible', icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
    ],
  },
];

export function ResourceCards() {
  return (
    <section id="resources" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Explora Nuestros Recursos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Información esencial para planificar tu visita a sitios de interés cultural y natural.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => {
            const image = PlaceHolderImages.find((img) => img.id === resource.imageId);
            return (
              <Card key={resource.title} className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                {image && (
                  <div className="relative h-56 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    {resource.icon}
                    <div className="flex flex-col">
                        <span className="text-xl">{resource.title}</span>
                        <span className="text-sm font-normal text-muted-foreground">{resource.category}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {resource.details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {detail.icon}
                        <span>{detail.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}