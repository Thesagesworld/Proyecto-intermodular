import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-fuengirola');

  return (
    <section id="home" className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center text-white">
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
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white" style={{color: 'white'}}>
          Proyecto Intermodular: Fuengirola
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-white/90">
          Análisis turístico y sostenible 2025
        </p>
      </div>
    </section>
  );
}
