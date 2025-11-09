import { Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#routes', label: 'Rutas' },
  { href: '#resources', label: 'Recursos' },
  { href: '#education', label: 'Actividades' },
  { href: '#gallery', label: 'Galería' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block text-lg">
              Proyecto Intermodular
            </span>
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
           <Button variant="outline">Contacto</Button>
        </div>
      </div>
    </header>
  );
}