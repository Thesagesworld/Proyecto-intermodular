import { Download, FileText, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const downloads = [
  {
    title: 'Folleto de Campaña 2024',
    description: 'Material promocional oficial para la temporada.',
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Paquete de Imágenes en Alta Calidad',
    description: 'Selección de fotografías para uso en marketing y prensa.',
    icon: <ImageIcon className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Guía de Sostenibilidad Turística',
    description: 'Directrices y buenas prácticas para un turismo responsable.',
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

export function DownloadableContent() {
  return (
    <section id="downloads" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Material de Marketing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Accede a nuestro repositorio de materiales de campaña para uso promocional.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-0">
              <ul className="divide-y divide-border">
                {downloads.map((item, index) => (
                  <li key={index} className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-5 w-5" />
                      <span className="sr-only">Descargar {item.title}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
