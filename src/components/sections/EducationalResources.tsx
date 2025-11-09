import { BookOpen, ScanLine, Share2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const resources = [
  {
    title: 'Interpretación del Patrimonio',
    description: 'Ejercicios prácticos para entender y comunicar el valor del patrimonio cultural.',
    icon: <BookOpen className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Análisis de Paisajes',
    description: 'Herramientas para la lectura e interpretación de los paisajes andaluces.',
    icon: <BookOpen className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Contenidos Multimedia con QR',
    description: 'Aprende a integrar modelos 3D, vídeos y mapas interactivos en tus rutas.',
    icon: <ScanLine className="h-8 w-8 text-primary" />,
  },
];

export function EducationalResources() {
  return (
    <section id="education" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Centro de Recursos Educativos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Un espacio centralizado para ejercicios de interpretación turística y material de aprendizaje.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <Card key={resource.title} className="text-center flex flex-col items-center p-6 transition-all duration-300 hover:bg-card hover:shadow-xl">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                {resource.icon}
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="text-muted-foreground">{resource.description}</p>
              </CardContent>
              <Button variant="ghost" className="mt-4">
                Saber más <Share2 className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
