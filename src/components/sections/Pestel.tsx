import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Building, Globe, Landmark, Laptop, Leaf, AlertTriangle, CheckCircle, ExternalLink, MinusCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const pestelFactors = [
  {
    title: 'Político y Legal',
    icon: <Landmark className="h-8 w-8 text-primary" />,
    content: (
      <div className="space-y-6 text-muted-foreground">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Building className="h-5 w-5" />
              Factores Políticos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-semibold text-foreground mb-1">Estabilidad y Regulación</h4>
              <p>Contexto político estable en Benalmádena, pero con tensiones en la regulación de viviendas de uso turístico (VUT), generando cambios normativos frecuentes.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Acuerdos Internacionales</h4>
              <p>Pertenencia a la UE y OMT, impulsando políticas de sostenibilidad, seguridad y libre circulación que benefician al destino.</p>
            </div>
             <div>
              <h4 className="font-semibold text-foreground mb-1">Impuestos y Ayudas</h4>
              <p>El sector se beneficia de fondos europeos (Next Generation) y estrategias nacionales, pero enfrenta impuestos locales que impactan la rentabilidad.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Estrategias de Desarrollo</h4>
              <p>Alineación con planes de turismo sostenible a nivel nacional, autonómico y local, enfocados en digitalización y calidad.</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Landmark className="h-5 w-5" />
              Factores Legales
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p><strong className="text-foreground">Leyes Laborales:</strong> Cumplimiento estricto de convenios, seguridad laboral y políticas de igualdad.</p>
            <p><strong className="text-foreground">Normas de Calidad:</strong> Obligatoriedad de inscripción en el Registro de Turismo de Andalucía (RTA) y cumplimiento de estándares de calidad y accesibilidad.</p>
            <p><strong className="text-foreground">Regulación Medioambiental:</strong> Adaptación a normativas de protección de espacios, gestión de residuos y sostenibilidad.</p>
             <p><strong className="text-foreground">Seguridad y Accesibilidad:</strong> Leyes que garantizan espacios accesibles para todos y normativas de seguridad (incendios, aforo).</p>
             <p><strong className="text-foreground">Regulación Específica:</strong> Control sobre VUT y agencias de viajes para proteger al consumidor y ordenar el mercado en Benalmádena.</p>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    title: 'Económico',
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    content: (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Panorama Económico de Andalucía</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-accent/50 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-foreground">Crecimiento del PIB del 3,2% en 2024</p>
                            <p className="text-sm text-muted-foreground">Impulsado por el consumo y el turismo.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-accent/50 rounded-lg">
                        <AlertTriangle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-foreground">Desaceleración prevista al 2,3% en 2025</p>
                            <p className="text-sm text-muted-foreground">Influenciado por factores externos y fondos europeos.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-accent/50 rounded-lg">
                        <MinusCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-foreground">Alta tasa de paro</p>
                            <p className="text-sm text-muted-foreground">A pesar de la mejora en la afiliación laboral, sigue siendo un desafío clave.</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground pt-4">Andalucía es la tercera economía de España (13,3% del PIB nacional) y la región más poblada. El turismo tiene un gran peso, con Benalmádena como uno de sus exponentes, aunque con menor dependencia del visitante internacional que la media nacional.</p>
                     <div className="text-sm flex gap-4 mt-4">
                        <a href="https://www.caixabankresearch.com/es/publicaciones/fichas-comunidades-autonomas/andalucia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                            <ExternalLink className="h-4 w-4" /> CaixaBank Research
                        </a>
                        <a href="https://www.exceltur.org/pib-turistico-espanol/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                           <ExternalLink className="h-4 w-4" /> Exceltur
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
  },
  {
    title: 'Sociocultural',
    icon: <Globe className="h-8 w-8 text-primary" />,
    content: (
        <div className="space-y-4 text-muted-foreground">
             <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Perfil del Turista y Comportamiento en Benalmádena</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <p><strong className="text-foreground">Carácter Internacional:</strong> Fuerte presencia de turistas del Reino Unido, seguidos de españoles, nórdicos y franceses.</p>
                    <p><strong className="text-foreground">Evolución del Interés:</strong> Transición del "sol y playa" hacia el turismo cultural, familiar, senior y de experiencias únicas.</p>
                    <p><strong className="text-foreground">Comportamiento Digital:</strong> Uso generalizado de internet y redes sociales para reservas, consultas y compartir experiencias, impulsando la digitalización del destino.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Relación con la Comunidad Local</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                     <p><strong className="text-foreground">Visión Positiva:</strong> El turismo es valorado por generar empleo y dinamismo económico.</p>
                     <p><strong className="text-foreground">Preocupaciones:</strong> La masificación estival y la presión sobre el mercado de la vivienda generan inquietud entre los residentes.</p>
                     <p><strong className="text-foreground">Acciones de Equilibrio:</strong> Las administraciones buscan regular las VUT y promover un turismo responsable para garantizar la convivencia.</p>
                </CardContent>
            </Card>
        </div>
    )
  },
  {
    title: 'Tecnológico',
    icon: <Laptop className="h-8 w-8 text-primary" />,
    content: (
       <div className="space-y-4 text-muted-foreground">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Digitalización en el Destino</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex items-start gap-4">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <p>Alto grado de digitalización en hoteles y restaurantes de Benalmádena mediante webs, apps y códigos QR para facilitar reservas e información interactiva.</p>
             </div>
             <div className="flex items-start gap-4">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <p>Uso emergente de IA a través de chatbots de asistencia al turista.</p>
             </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-5 w-5 text-orange-500 mt-1" />
                <p>Infraestructuras digitales públicas (pantallas informativas) a menudo desactivadas, mostrando un aprovechamiento tecnológico incompleto.</p>
              </div>
          </CardContent>
        </Card>
       </div>
    )
  },
  {
    title: 'Medioambiental',
    icon: <Leaf className="h-8 w-8 text-primary" />,
    content: (
        <div className="space-y-4 text-muted-foreground">
             <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Desafíos Climáticos y de Recursos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <p><strong className="text-foreground">Desertización y Contaminación:</strong> El sur de España, incluyendo la Costa del Sol, enfrenta un riesgo severo de desertización y problemas de contaminación del agua.</p>
                    <p><strong className="text-foreground">Crisis Hídrica en Andalucía:</strong> Seis años de sequía han dejado los embalses a un 21% de capacidad, llevando a restricciones que afectan directamente al sector turístico (piscinas, duchas, riego) en Benalmádena.</p>
                    <p><strong className="text-foreground">Presión Agrícola:</strong> La expansión de cultivos subtropicales como el aguacate en la Axarquía agrava la escasez de agua.</p>
                    <p><strong className="text-foreground">Cambio Climático:</strong> Fenómenos meteorológicos extremos intensifican los problemas, convirtiendo la gestión del agua en una prioridad crítica.</p>
                </CardContent>
            </Card>
        </div>
    )
  },
];

export function Pestel() {
  return (
    <section id="pestel" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Análisis PESTEL
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            En mi análisis, estudio cómo los factores políticos, económicos, socioculturales, tecnológicos y medioambientales influyen en el macroentorno del destino (Benalmádena).
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          {pestelFactors.map((factor) => (
            <AccordionItem value={factor.title} key={factor.title}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-accent p-3">
                    {factor.icon}
                  </div>
                  {factor.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-accent/30 rounded-b-lg border-l-4 border-primary">
                {factor.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
