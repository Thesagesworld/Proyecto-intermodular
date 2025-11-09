import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const galleryImages = [
  'gallery-1',
  'gallery-2',
  'gallery-3',
  'gallery-4',
  'route-pueblos-blancos',
  'route-legado-andalusi',
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Galería de Momentos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Una selección visual de los atractivos clave de Andalucía y los momentos destacados del proyecto.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {galleryImages.map((imageId, index) => {
              const image = PlaceHolderImages.find((img) => img.id === imageId);
              if (!image) return null;
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                         <div className="relative h-full w-full">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                                data-ai-hint={image.imageHint}
                            />
                         </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
