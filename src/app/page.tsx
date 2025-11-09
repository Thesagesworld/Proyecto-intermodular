import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Pestel } from '@/components/sections/Pestel';
import { Dafo } from '@/components/sections/Dafo';
import { Stats } from '@/components/sections/Stats';
import { Competencia } from '@/components/sections/Competencia';
import { Comunicacion } from '@/components/sections/Comunicacion';
import { Gallery } from '@/components/sections/Gallery';
import { Conclusiones } from '@/components/sections/Conclusiones';
import { BackToTopButton } from '@/components/layout/BackToTopButton';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Pestel />
        <Dafo />
        <Stats />
        <Competencia />
        <Comunicacion />
        <Gallery />
        <Conclusiones />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
