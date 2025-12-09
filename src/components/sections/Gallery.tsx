import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Gallery() {
  const fodaImage = PlaceHolderImages.find((img) => img.id === 'foda-analysis');
  
  const galleryItems = fodaImage ? [fodaImage] : [];


  return (
    <section id="gallery" className="py-16 sm:py-24 bg-accent/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Galería Visual
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Este es un mosaico donde presento los gráficos, mapas e infografías que he desarrollado para el proyecto.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <Card key={item.id} className="overflow-hidden group">
              <CardContent className="flex aspect-square items-center justify-center p-0 bg-background hover:bg-card transition-colors">
                 <div className="relative h-full w-full">
                    <Image
                      src={item.imageUrl}
                      alt={item.description}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={item.imageHint}
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white text-center p-2 text-sm">{item.description}</p>
                    </div>
                 </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
