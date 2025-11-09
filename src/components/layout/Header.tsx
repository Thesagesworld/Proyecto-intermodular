import Link from 'next/link';
import { Sun } from 'lucide-react';

const navLinks = [
  { href: '/pestel', label: 'PESTEL' },
  { href: '/dafo', label: 'DAFO' },
  { href: '/datos', label: 'Datos' },
  { href: '/competencia', label: 'Competencia' },
  { href: '/comunicacion', label: 'Comunicación' },
  { href: '/galeria', label: 'Galería' },
  { href: '/conclusiones', label: 'Conclusiones' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Sun className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block text-lg">
              Proyecto Fuengirola
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
