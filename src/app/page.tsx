import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ThematicRoutes } from '@/components/sections/ThematicRoutes';
import { ResourceCards } from '@/components/sections/ResourceCards';
import { QuizGenerator } from '@/components/sections/QuizGenerator';
import { EducationalResources } from '@/components/sections/EducationalResources';
import { Gallery } from '@/components/sections/Gallery';
import { DownloadableContent } from '@/components/sections/DownloadableContent';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ThematicRoutes />
        <ResourceCards />
        <QuizGenerator />
        <EducationalResources />
        <Gallery />
        <DownloadableContent />
      </main>
      <Footer />
    </div>
  );
}
