import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Euro, MapPin, Plane, BarChart3, Globe, Smartphone, Building, LineChart, TrendingUp, DollarSign } from 'lucide-react';

const topCountries = [
  { name: 'Francia', visitors: '100 millones' },
  { name: 'España', visitors: '85 millones' },
  { name: 'Estados Unidos', visitors: '67 millones' },
  { name: 'Italia', visitors: '57 millones' },
  { name: 'Turquía', visitors: '55 millones' },
  { name: 'México', visitors: '42 millones' },
  { name: 'Reino Unido', visitors: '37 millones' },
  { name: 'China', visitors: '36 millones' },
  { name: 'Alemania', visitors: '35 millones' },
  { name: 'Grecia', visitors: '33 millones' },
];

export function Stats() {
  return (
    <section id="stats" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Datos y Estadísticas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A continuación, presento los indicadores clave del rendimiento turístico que he analizado, desde el macroentorno al microentorno.
          </p>
        </div>

        {/* --- Panorama Mundial --- */}
        <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Globe className="h-8 w-8 text-secondary" />
              <h3 className="text-2xl font-bold text-foreground">Industria General: Panorama Mundial</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Llegadas Internacionales</CardTitle>
                        <CardDescription>2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-center items-center">
                        <Users className="h-12 w-12 text-primary mb-4" />
                        <p className="text-4xl font-bold text-foreground">1.470M</p>
                        <p className="text-muted-foreground">Superando el récord prepandemia.</p>
                    </CardContent>
                </Card>
                <Card className="lg:col-span-2 flex flex-col">
                    <CardHeader>
                        <CardTitle>Top 10 Países Más Visitados (2024)</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <ul className="space-y-2 text-sm">
                        {topCountries.slice(0, 5).map(country => (
                          <li key={country.name} className="flex justify-between items-center text-muted-foreground">
                            <span>{country.name}</span>
                            <span className="font-semibold text-foreground">{country.visitors}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Crecimiento Económico Global – PIB Internacional 2024</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                            Los datos reflejan una <span className="font-semibold text-foreground">moderada recuperación económica</span> en un contexto de desafíos como la <span className="font-semibold text-foreground">inflación</span> y las <span className="font-semibold text-foreground">tensiones geopolíticas</span>, mostrando que, a pesar de las dificultades, la economía internacional mantiene una tendencia de <span className="font-semibold text-foreground">crecimiento estable</span>.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Card className="bg-accent/50">
                                <CardContent className="flex items-center gap-4 p-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <DollarSign className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">111T $</p>
                                        <p className="text-sm text-muted-foreground">PIB mundial</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-accent/50">
                                <CardContent className="flex items-center gap-4 p-4">
                                    <div className="bg-green-500/10 p-3 rounded-full">
                                        <TrendingUp className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">~3%</p>
                                        <p className="text-sm text-muted-foreground">Crecimiento global</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>

        {/* --- Industria Nacional --- */}
        <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
               <MapPin className="h-8 w-8 text-secondary" />
               <h3 className="text-2xl font-bold text-foreground">Industria Nacional: España</h3>
             </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                  <CardTitle>Mercados Emisores</CardTitle>
                  <CardDescription>Julio 2025</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Principal mercado <span className="font-semibold text-foreground">no residente</span>: <span className="font-semibold text-primary">Reino Unido</span>, con una estancia media de 5-7 noches y 11M de visitantes.</p>
                  <p className="text-muted-foreground">Principal mercado <span className="font-semibold text-foreground">excursionista</span>: <span className="font-semibold text-primary">Francia</span>, con 5M de visitantes (sin pernoctación).</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                  <CardTitle>Tráfico Aéreo</CardTitle>
                   <CardDescription>Verano 2025</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                  <Plane className="h-10 w-10 text-primary" />
                  <div>
                    <p className="text-muted-foreground mb-2">Principales aeropuertos:</p>
                    <ul className="list-disc pl-5 text-muted-foreground text-sm">
                        <li>Adolfo Suárez Madrid-Barajas</li>
                        <li>Josep Tarradellas Barcelona-El Prat</li>
                        <li>Palma de Mallorca</li>
                    </ul>
                  </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* --- Industria Local ---_ */}
        <div>
            <div className="flex items-center gap-4 mb-8">
               <Building className="h-8 w-8 text-secondary" />
              <h3 className="text-2xl font-bold text-foreground">Industria Local: Andalucía y Costa del Sol</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Empresas Turísticas en Andalucía</CardTitle>
                        <CardDescription>2024, según SEGITTUR</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center gap-6">
                        <div className="flex items-center gap-4">
                            <LineChart className="h-10 w-10 text-primary" />
                            <div>
                                <p className="text-3xl font-bold text-foreground">110,952</p>
                                <p className="text-muted-foreground">Empresas turísticas</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border-l pl-6">
                             <div className="text-green-600 font-bold text-2xl">+3,99%</div>
                             <p className="text-muted-foreground">Crecimiento interanual</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Medición Experimental del Turismo</CardTitle>
                        <CardDescription>Uso de datos de telefonía móvil</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-start gap-4">
                        <Smartphone className="h-8 w-8 text-secondary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm">Implementación de un estudio basado en la señalización de móviles para conocer de forma agregada el origen y destino de los turistas, mejorando la precisión de las estadísticas.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Análisis de Mercados y Gasto</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-3 border rounded-lg bg-accent/20">
                            <h3 className="font-semibold text-sm text-primary mb-1">Identificación de mercados emisores</h3>
                            <p className="text-muted-foreground text-sm">Se utilizan análisis de datos para optimizar campañas de marketing dirigidas a la Costa del Sol.</p>
                        </div>
                         <div className="p-3 border rounded-lg bg-accent/20">
                            <h3 className="font-semibold text-sm text-primary mb-1">Gasto Turístico (EGATUR)</h3>
                            <p className="text-muted-foreground text-sm">Se monitoriza el gasto para entender su impacto económico y patrones de consumo.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
    