import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
          Vive Benalmádena y Málaga
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          Un viaje por la Costa del Sol, explorando su cultura, playas y rincones inolvidables.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">
            Explorar Rutas
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="secondary">
            Recursos Educativos
          </Button>
        </div>
      </div>
    </section>
  );
}
