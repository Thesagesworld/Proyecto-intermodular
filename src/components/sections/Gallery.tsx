import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';

const galleryItems = Array(8).fill(0);

export function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-accent/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Galería Visual
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Mosaico para gráficos, mapas o infografías del proyecto.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((_, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardContent className="flex aspect-square items-center justify-center p-0 bg-background hover:bg-card transition-colors">
                 <div className="relative h-full w-full flex items-center justify-center">
                    <Plus className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                 </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
