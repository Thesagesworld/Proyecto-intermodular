import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const routes = [
  {
    title: 'Ruta por Arroyo de la Miel',
    description: 'Explora el corazón de Benalmádena, su cultura y su gente.',
    imageId: 'route-arroyo-miel',
    tags: ['Cultura', 'Urbano'],
  },
  {
    title: 'Paseo Marítimo de Benalmádena',
    description: 'Disfruta de las playas, chiringuitos y el ambiente de la costa.',
    imageId: 'route-benalmadena-costa',
    tags: ['Playa', 'Ocio'],
  },
  {
    title: 'Centro Histórico de Málaga',
    description: 'Piérdete por las calles llenas de historia, museos y gastronomía.',
    imageId: 'route-malaga-centro',
    tags: ['Historia', 'Gastronomía'],
  },
];

export function ThematicRoutes() {
  return (
    <section id="routes" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Rutas Temáticas por la Zona
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Experiencias diseñadas para mostrarte lo mejor de Benalmádena y Málaga.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => {
            const image = PlaceHolderImages.find((img) => img.id === route.imageId);
            return (
              <Card key={route.title} className="overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
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
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {route.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-grow">{route.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {route.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                   <Button variant="outline" className="mt-auto w-full">
                    Ver Ruta <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
