import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Megaphone, AtSign, Share2 } from 'lucide-react';

const communicationChannels = [
  { title: 'Redes Sociales', icon: <Share2 className="h-8 w-8 text-primary" /> },
  { title: 'Estrategias de Promoción', icon: <Megaphone className="h-8 w-8 text-primary" /> },
  { title: 'Campañas de Ejemplo', icon: <AtSign className="h-8 w-8 text-primary" /> },
];

export function Comunicacion() {
  return (
    <section id="comunicacion" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Estrategias de Comunicación
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            En esta sección, detallo el plan de promoción y difusión que he diseñado para Fuengirola.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communicationChannels.map((channel) => (
            <Card key={channel.title} className="text-center flex flex-col items-center p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="mb-4 rounded-full bg-accent p-4">
                {channel.icon}
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle>{channel.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-grow w-full">
                 <div className="bg-gray-100 h-24 w-full rounded-md animate-pulse mt-2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
