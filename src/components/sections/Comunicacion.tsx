import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Instagram, Facebook, Share2, ThumbsUp, MessageSquare, Percent } from 'lucide-react';

const socialMediaData = [
  {
    platform: 'Instagram',
    icon: <Instagram className="h-8 w-8 text-pink-600" />,
    followers: '19.3K',
    engagement: '0.77%',
    regularity: 'No',
    avgLikes: '147',
    avgComments: '8',
    bgColor: 'bg-pink-100',
  },
  {
    platform: 'Facebook',
    icon: <Facebook className="h-8 w-8 text-blue-800" />,
    followers: '36K',
    engagement: '0.07%',
    regularity: 'Sí',
    avgLikes: '23',
    avgComments: '4',
    bgColor: 'bg-blue-100',
  },
  {
    platform: 'TikTok',
    icon: <Share2 className="h-8 w-8 text-black" />,
    followers: '1165',
    engagement: '1.46%',
    regularity: 'No',
    avgLikes: '16',
    avgComments: '1',
    bgColor: 'bg-gray-200',
  },
];

export function Comunicacion() {
  return (
    <section id="comunicacion" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Comunicación Digital
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Análisis de la presencia en redes sociales del Ayuntamiento de Benalmádena para evaluar su estrategia de comunicación.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialMediaData.map((social) => (
            <Card key={social.platform} className="shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="items-center text-center">
                <div className={`p-4 rounded-full ${social.bgColor} mb-4`}>
                    {social.icon}
                </div>
                <CardTitle className='text-2xl'>{social.platform}</CardTitle>
                <CardDescription className="font-bold text-lg text-foreground">{social.followers} seguidores</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-4">
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center justify-between">
                        <span className="flex items-center gap-2"><Percent className="h-4 w-4 text-secondary"/> Engagement</span>
                        <span className="font-semibold text-foreground">{social.engagement}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        <span className="flex items-center gap-2"><ThumbsUp className="h-4 w-4 text-secondary"/> Likes (promedio)</span>
                        <span className="font-semibold text-foreground">{social.avgLikes}</span>
                    </li>
                     <li className="flex items-center justify-between">
                        <span className="flex items-center gap-2"><MessageSquare className="h-4 w-4 text-secondary"/> Comentarios (promedio)</span>
                        <span className="font-semibold text-foreground">{social.avgComments}</span>
                    </li>
                </ul>
                 <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-center text-muted-foreground">Publicación regular: <span className={`font-bold ${social.regularity === 'Sí' ? 'text-green-600' : 'text-red-600'}`}>{social.regularity}</span></p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
