import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Building, Globe, Landmark, Laptop, Leaf } from 'lucide-react';
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
        <div>
          <h4 className="font-semibold text-foreground mb-2">Factores Políticos</h4>
          <p>
            Los factores políticos hacen referencia a las decisiones y acciones de los distintos niveles de gobierno (nacional, autonómico, provincial y local) que influyen en la economía y en la actividad turística. En el caso de Benalmádena y la Costa del Sol, los principales son:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Estabilidad política del país y la región:</strong> España mantiene un contexto político relativamente estable y sigue apostando por el turismo como motor económico. Sin embargo, existen tensiones políticas relacionadas con la regulación del alojamiento turístico (VUT), que generan debates y posibles cambios normativos.</li>
            <li><strong>Relaciones internacionales y acuerdos:</strong> Como miembro de la UE y la OMT, España adopta estrategias de sostenibilidad y turismo responsable que se aplican en destinos como Benalmádena.</li>
            <li><strong>Impuestos y ayudas al sector turístico:</strong> El sector se beneficia de ayudas (fondos Next Generation, Estrategia España Turismo 2030) pero también se ve afectado por impuestos locales que impactan en la rentabilidad.</li>
            <li><strong>Estrategias de desarrollo turístico:</strong> Planes a todos los niveles (nacional, andaluz, provincial y local) marcan la pauta hacia un turismo más digital y sostenible, como el Plan Estratégico de Calidad Turística de Benalmádena (2025–2030).</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Factores Legales</h4>
           <p>
            Engloban las leyes, normas y reglamentos que las empresas e instituciones turísticas deben cumplir para operar de forma segura y regulada. En 2025 destacan:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Leyes laborales:</strong> Cumplimiento del Estatuto de los Trabajadores, convenios colectivos, seguridad laboral y políticas de igualdad.</li>
            <li><strong>Normas de alojamiento y calidad:</strong> Las empresas deben inscribirse en el Registro de Turismo de Andalucía (RTA) y cumplir requisitos de calidad, limpieza y accesibilidad. La Ley 6/2024 refuerza la coordinación autonómica.</li>
            <li><strong>Regulaciones medioambientales:</strong> Normativas para proteger espacios naturales, gestionar residuos y reducir la contaminación. Los proyectos deben alinearse con la Estrategia de Sostenibilidad Turística.</li>
            <li><strong>Normas de accesibilidad y seguridad:</strong> Obligatoriedad de adaptar espacios para personas con movilidad reducida y cumplir con normativas de seguridad contra incendios y aforo.</li>
            <li><strong>Regulación de VUT y agencias:</strong> Las viviendas turísticas y agencias deben cumplir requisitos específicos, y las plataformas digitales tienen nuevas obligaciones fiscales y de transparencia.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Económico',
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    content: (
        <div className="space-y-4 text-muted-foreground">
            <p>El PIB andaluz creció un 3,2% en 2024, impulsado por el consumo y el turismo, aunque se espera una desaceleración al 2,3% en 2025 debido a factores externos. A pesar de la mejora en la afiliación laboral, la tasa de paro sigue siendo una de las más altas de España.</p>
            <p>Andalucía, con casi 8,7 millones de habitantes, es la región más poblada y la tercera economía de España, aportando el 13,3% del PIB nacional. El turismo tiene un gran peso, aunque depende menos del visitante internacional que la media española (54% de pernoctaciones extranjeras frente al 64% nacional en 2024).</p>
             <div className="text-sm">
                <p>Fuentes:</p>
                <a href="https://www.caixabankresearch.com/es/publicaciones/fichas-comunidades-autonomas/andalucia" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CaixaBank Research</a>
                <br/>
                <a href="https://www.exceltur.org/pib-turistico-espanol/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Exceltur</a>
            </div>
        </div>
    )
  },
  {
    title: 'Sociocultural',
    icon: <Globe className="h-8 w-8 text-primary" />,
    content: (
        <div className="space-y-4 text-muted-foreground">
            <p>Benalmádena es un destino con un marcado carácter internacional, atrayendo principalmente a turistas del Reino Unido, seguidos de españoles, nórdicos, alemanes y franceses. El perfil del visitante es variado: desde el tradicional turista de "sol y playa" hasta un creciente interés por el turismo cultural, familiar y senior.</p>
            <p>El comportamiento del turista ha evolucionado hacia lo digital, utilizando internet para reservas y redes sociales para compartir experiencias, lo que obliga al destino a modernizar su oferta de servicios. A nivel local, existe una relación ambivalente con el turismo: se valora su impacto económico positivo, pero también genera preocupación por la masificación estival y la presión sobre el mercado de la vivienda. Esto ha llevado a las administraciones a buscar un equilibrio mediante la regulación de las viviendas turísticas (VUT) y campañas de turismo responsable.</p>
        </div>
    )
  },
  {
    title: 'Tecnológico',
    icon: <Laptop className="h-8 w-8 text-primary" />,
    content: (
       <div className="text-muted-foreground">
        <p>
            El grado de digitalización en Benalmádena ha aumentado significativamente. Hoteles, restaurantes y atracciones utilizan páginas web, apps y códigos QR para facilitar reservas e información interactiva. La inteligencia artificial también emerge a través de chatbots de asistencia. Sin embargo, aún existen áreas de mejora, como la falta de mantenimiento de infraestructuras digitales públicas (pantallas de información desactivadas), lo que evidencia que, aunque la tecnología está presente, su aprovechamiento no es total.
        </p>
       </div>
    )
  },
  {
    title: 'Medioambiental',
    icon: <Leaf className="h-8 w-8 text-primary" />,
    content: (
        <div className="space-y-4 text-muted-foreground">
            <p>España, y en particular Andalucía, enfrenta graves desafíos medioambientales como la desertización y la contaminación del agua. La región ha soportado seis años de sequía, con embalses al 21% de su capacidad a principios de 2024, lo que ha llevado a restricciones en el uso del agua que afectan directamente al sector turístico (piscinas, duchas públicas, riego).</p>
            <p>La presión sobre los recursos hídricos se ve agravada por la expansión de cultivos subtropicales como el aguacate en la Axarquía, que demandan grandes cantidades de agua. El cambio climático intensifica estos problemas con fenómenos meteorológicos extremos, convirtiendo la gestión del agua en una prioridad urgente para la sostenibilidad del turismo en la Costa del Sol.</p>
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
            La Costa del Sol es uno de los destinos más importantes del mundo. En 2023, el turismo generó un impacto económico directo de 19.138 millones de euros y más de 200.000 empleos. Este análisis nos permitirá estudiar el macroentorno del destino.
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
