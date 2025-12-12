import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const questionnaireData1 = [
    {
        block: 'BLOQUE 1: PERFIL DEL ENCUESTADO',
        questions: [
            { id: '1', question: '¿En qué parte de Benalmádena se encuentra su empresa?', objective: 'Clasificar las respuestas', audience: 'Empresas turísticas', type: 'Cerrada de elección única' },
            { id: '2', question: '¿Qué tipo de empresa es la suya?', objective: 'Clasificar las respuestas', audience: 'Empresas turísticas', type: 'Cerrada de elección múltiple' },
        ],
    },
    {
        block: 'BLOQUE 2: SOSTENIBILIDAD',
        questions: [
            { id: '3', question: '¿Qué acciones de sostenibilidad implementa su empresa?', objective: 'Conocer las medidas de sostenibilidad', audience: 'Empresas turísticas', type: 'Cerrada de elección múltiple' },
            { id: '4', question: 'En una escala del 1 al 5, ¿cómo de importante es para su empresa la sostenibilidad?', objective: 'Evaluar la importancia de la sostenibilidad', audience: 'Empresas turísticas', type: 'Escala de Likert' },
        ],
    },
    {
        block: 'BLOQUE 3: DIGITALIZACIÓN',
        questions: [
            { id: '5', question: '¿Qué herramientas digitales utiliza su empresa?', objective: 'Conocer el nivel de digitalización', audience: 'Empresas turísticas', type: 'Cerrada de elección múltiple' },
            { id: '6', question: '¿Cree que Benalmádena es un destino turístico inteligente? ¿Por qué?', objective: 'Conocer la percepción sobre la digitalización del destino', audience: 'Empresas turísticas', type: 'Mixta' },
        ],
    },
];

const questionnaireData2 = [
  {
    block: 'BLOQUE 1: PERFIL DEL ENCUESTADO',
    questions: [
      { id: '1', question: 'Sexo', objective: 'Clasificar las respuestas', audience: 'Visitantes y/o Turistas', type: 'Cerrada de elección única' },
      { id: '2', question: 'Edad', objective: 'Clasificar las respuestas', audience: 'Visitantes y/o Turistas', type: 'Abierta numérica' },
      { id: '3', question: 'Nacionalidad', objective: 'Conocer el origen', audience: 'Visitantes y/o Turistas', type: 'Abierta' },
      { id: '4', question: '¿Cuál es su nivel de estudios?', objective: 'Clasificar las respuestas', audience: 'Visitantes y/o Turistas', type: 'Cerrada de elección única' },
    ]
  },
  {
    block: 'BLOQUE 2: PLANIFICACIÓN Y ESTANCIA EN EL DESTINO (BENALMÁDENA)',
    questions: [
      { id: '5', question: '¿Cómo ha planificado su viaje?', objective: 'Conocer los canales de planificación', audience: 'Visitantes y/o Turistas', type: 'Cerrada de elección múltiple' },
      { id: '6', question: '¿Con quién viaja?', objective: 'Clasificar las respuestas', audience: 'Visitantes y/o Turistas', type: 'Cerrada de elección única' },
      { id: '7', question: '¿En qué tipo de alojamiento se hospeda?', objective: 'Conocer las preferencias de alojamiento', audience: 'Visitantes y/o Turistas', type: 'Cerrada de elección múltiple' },
      { id: '8', question: '¿Cuánto tiempo dura su estancia?', objective: 'Conocer la duración de la estancia', audience: 'Visitantes y/o Turistas', type: 'Cerrada de elección única' },
      { id: '9', question: '¿Qué actividades ha realizado o va a realizar durante su estancia?', objective: 'Conocer los intereses y motivaciones del turista para realizar un análisis de la oferta y la demanda', audience: 'Visitantes y/o Turistas', type: 'Cerrada de elección múltiple' },
    ]
  },
  {
    block: 'BLOQUE 3: MOTIVACIÓN Y VALORACIÓN DEL DESTINO',
    questions: [
      { id: '10', question: '¿Qué es lo que más le ha gustado de Benalmádena?', objective: 'Conocer la percepción del destino', audience: 'Visitantes y/o Turistas', type: 'Abierta' },
      { id: '11', question: 'En una escala del 1 al 5, valore los siguientes aspectos de Benalmádena: limpieza, seguridad, amabilidad...', objective: 'Conocer el grado de satisfacción del turista con el destino y detectar posibles debilidades', audience: 'Visitantes y/o Turistas', type: 'Escala de Likert' },
    ]
  },
  {
    block: 'BLOQUE 4: SOSTENIBILIDAD Y DIGITALIZACIÓN',
    questions: [
      { id: '12', question: '¿Considera que Benalmádena es un destino turístico sostenible?', objective: 'Conocer la percepción del turista sobre la sostenibilidad del destino', audience: 'Visitantes y/o Turistas', type: 'Cerrada de elección única' },
      { id: '13', question: '¿Ha utilizado alguna herramienta digital durante su estancia (app, QR, etc)?', objective: 'Conocer el grado de digitalización del destino', audience: 'Visitantes y/o Turistas', type: 'Cerrada de elección única' },
    ]
  }
];


export function Investigacion() {
  return (
    <section id="investigacion" className="py-16 sm:py-24 bg-accent/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Investigación y Cuestionarios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Para fundamentar mi análisis, he diseñado dos cuestionarios dirigidos a públicos clave del sector turístico de Benalmádena.
          </p>
        </div>
        
        <Tabs defaultValue="empresas" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="empresas">Cuestionario a Empresas</TabsTrigger>
            <TabsTrigger value="visitantes">Cuestionario a Visitantes</TabsTrigger>
          </TabsList>
          <TabsContent value="empresas">
            <Card className="shadow-lg mt-6">
                <CardHeader>
                    <CardTitle className="text-xl text-center">Cuestionario Dirigido a las Empresas del Sector Turístico de Benalmádena</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80px]">Nº</TableHead>
                                <TableHead>Pregunta</TableHead>
                                <TableHead>Objetivo</TableHead>
                                <TableHead>Público</TableHead>
                                <TableHead className="text-right">Tipo de Pregunta</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {questionnaireData1.map((blockData) => (
                                <React.Fragment key={blockData.block}>
                                    <TableRow className="bg-muted/50">
                                        <TableCell colSpan={5} className="font-bold text-foreground">{blockData.block}</TableCell>
                                    </TableRow>
                                    {blockData.questions.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="font-medium">{item.id}</TableCell>
                                            <TableCell>{item.question}</TableCell>
                                            <TableCell>{item.objective}</TableCell>
                                            <TableCell>{item.audience}</TableCell>
                                            <TableCell className="text-right">{item.type}</TableCell>
                                        </TableRow>
                                    ))}
                                </React.Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="visitantes">
              <Card className="shadow-lg mt-6">
                <CardHeader>
                    <CardTitle className="text-xl text-center">Cuestionario Dirigido a los Visitantes y/o Turistas de Benalmádena</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80px]">Nº</TableHead>
                                <TableHead>Pregunta</TableHead>
                                <TableHead>Objetivo</TableHead>
                                <TableHead>Público</TableHead>
                                <TableHead className="text-right">Tipo de Pregunta</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {questionnaireData2.map((blockData) => (
                                <React.Fragment key={blockData.block}>
                                    <TableRow className="bg-muted/50">
                                        <TableCell colSpan={5} className="font-bold text-foreground">{blockData.block}</TableCell>
                                    </TableRow>
                                    {blockData.questions.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="font-medium">{item.id}</TableCell>
                                            <TableCell>{item.question}</TableCell>
                                            <TableCell>{item.objective}</TableCell>
                                            <TableCell>{item.audience}</TableCell>
                                            <TableCell className="text-right">{item.type}</TableCell>
                                        </TableRow>
                                    ))}
                                </React.Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}
