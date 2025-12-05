import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Hotel, Euro, MapPin, Plane, BarChart3, Globe, Smartphone, Building } from 'lucide-react';

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
            Indicadores clave del rendimiento turístico, desde el macroentorno al microentorno.
          </p>
        </div>

        {/* Industria General */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Globe className="h-8 w-8 text-secondary" />
              <CardTitle className="text-2xl">Industria General: Panorama Mundial</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                El turismo mundial en 2024 demostró una fuerte recuperación, alcanzando e incluso superando los niveles prepandemia de 2019, con <span className="font-semibold text-foreground">1.470 millones de llegadas</span> de turistas internacionales, superando el récord previo de 1.460 millones. Regiones como Europa y Oriente Medio lideraron este crecimiento. Entre enero y junio de 2025, casi <span className="font-semibold text-foreground">690 millones de turistas</span> realizaron viajes internacionales, un 5% más que en el mismo periodo de 2024.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top 10 Países Más Visitados en 2024</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topCountries.map(country => (
                      <li key={country.name} className="flex justify-between items-center text-muted-foreground">
                        <span>{country.name}</span>
                        <span className="font-semibold text-foreground">{country.visitors}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Crecimiento Económico Global</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <BarChart3 className="h-7 w-7 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">PIB Internacional 2024</h3>
                      <p className="text-muted-foreground">Se situó en torno a los <span className="font-bold">111 billones de dólares</span> estadounidenses, con una tasa de crecimiento mundial que rondó el 3% o ligeramente superior.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Industria Nacional */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
             <div className="flex items-center gap-4">
               <MapPin className="h-8 w-8 text-secondary" />
               <CardTitle className="text-2xl">Industria Nacional: España</CardTitle>
             </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                  <CardTitle>Datos Clave (Julio 2025)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Principal mercado de origen (no residente): <span className="font-semibold text-foreground">Reino Unido</span>, con una estancia media de 5-7 noches y 11 millones de visitantes aprox.</p>
                  <p className="text-muted-foreground">Principal mercado de origen (excursionistas): <span className="font-semibold text-foreground">Francia</span>, con 5 millones de visitantes aprox. (sin pernoctación).</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                  <CardTitle>Tráfico Aéreo (Verano 2025)</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground mb-2">Principales aeropuertos:</p>
                  <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Adolfo Suárez Madrid-Barajas</li>
                      <li>Josep Tarradellas Barcelona-El Prat</li>
                      <li>Palma de Mallorca</li>
                  </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Industria Local */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
               <Building className="h-8 w-8 text-secondary" />
              <CardTitle className="text-2xl">Industria Local: Andalucía y Costa del Sol</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Empresas Turísticas en Andalucía (2024)</CardTitle>
                    <CardDescription>Según datos de SEGITTUR.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">Las actividades asociadas al turismo suman <span className="font-semibold text-foreground">110.952 empresas</span>, con un crecimiento interanual del 3,99%. La hostelería mantiene el mayor número de empresas, seguida por otras actividades turísticas y agencias de viajes, que han crecido de forma constante.</p>
                    <p className="text-muted-foreground">Los datos muestran una tendencia positiva y estable en el sector turístico andaluz.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Medición Experimental del Turismo</CardTitle>
                    <CardDescription>Uso de datos de telefonía móvil.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-start gap-4">
                    <Smartphone className="h-8 w-8 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Se ha implementado un estudio para conocer de forma agregada, a través de la señalización de los teléfonos móviles, la procedencia y destino de los turistas nacionales e internacionales que visitan las distintas comunidades, provincias y municipios, mejorando la precisión de las estadísticas.</p>
                </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg bg-accent/20">
                    <h3 className="font-semibold text-lg text-primary mb-2">Identificación de mercados emisores</h3>
                    <p className="text-muted-foreground">Se utilizan análisis de datos para identificar las ciudades emisoras con mayor potencial para viajar a la Costa del Sol, optimizando las campañas de marketing.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-accent/20">
                    <h3 className="font-semibold text-lg text-primary mb-2">Gasto Turístico (EGATUR)</h3>
                    <p className="text-muted-foreground">Se monitoriza el gasto de los visitantes internacionales para entender su impacto económico y patrones de consumo.</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
