import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Turismo Benalmádena</h3>
            <p className="text-sm text-muted-foreground">
              Tu guía para explorar Arroyo de la Miel, Benalmádena y Málaga.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Secciones</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#routes" className="text-muted-foreground hover:text-primary">Rutas</a></li>
              <li><a href="#resources" className="text-muted-foreground hover:text-primary">Recursos</a></li>
              <li><a href="#gallery" className="text-muted-foreground hover:text-primary">Galería</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-sm text-muted-foreground">
              info@turismobenalmadena.es
              <br />
              +34 123 456 789
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" /></a>
              <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Boletín</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Suscríbete para recibir novedades.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" className="bg-background" />
              <Button type="submit">Suscribir</Button>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Turismo Benalmádena. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
