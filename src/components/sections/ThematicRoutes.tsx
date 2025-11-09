import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const routes = [
  {
    title: 'Ruta de los Pueblos Blancos',
    description: 'Recorre los encantadores pueblos de fachadas encaladas y calles floridas.',
    imageId: 'route-pueblos-blancos',
    tags: ['Cultura', 'Paisaje'],
  },
  {
    title: 'Ruta del Legado Andalusí',
    description: 'Descubre la herencia islámica a través de monumentos impresionantes.',
    imageId: 'route-legado-andalusi',
    tags: ['Historia', 'Arquitectura'],
  },
  {
    title: 'Ruta de los Vinos de Jerez',
    description: 'Sumérgete en la tradición vinícola de la región, visitando bodegas centenarias.',
    imageId: 'route-vinos',
    tags: ['Gastronomía', 'Tradición'],
  },
];

export function ThematicRoutes() {
  return (
    <section id="routes" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Rutas Temáticas Inolvidables
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Experiencias inmersivas diseñadas para mostrarte lo mejor de Andalucía.
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
