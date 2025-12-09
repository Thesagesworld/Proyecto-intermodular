'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Home,
  LayoutList,
  Library,
  PieChart,
  Users,
  MessageCircle,
  Image,
  FileText,
  Menu,
  X,
  Sun,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Inicio', icon: <Home /> },
  { href: '/pestel', label: 'PESTEL', icon: <LayoutList /> },
  { href: '/datos', label: 'Datos', icon: <PieChart /> },
  { href: '/competencia', label: 'Competencia', icon: <Users /> },
  { href: '/comunicacion', label: 'Comunicación', icon: <MessageCircle /> },
  { href: '/galeria', label: 'Galería', icon: <Image /> },
  { href: '/foda', label: 'FODA', icon: <Library /> },
  { href: '/conclusiones', label: 'Conclusiones', icon: <FileText /> },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 z-50 w-full"
      style={{
        backgroundColor: 'hsla(var(--header-background), 0.8)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 text-[hsl(var(--header-foreground))] transition-colors hover:text-[hsl(var(--header-accent))]"
        >
          <Sun className="h-6 w-6" />
          <span className="font-bold sm:inline-block text-lg">Proyecto</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'bg-[hsl(var(--header-accent))] text-white'
                  : 'text-[hsl(var(--header-foreground))] hover:bg-[hsl(var(--header-accent))] hover:bg-opacity-20'
              )}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[hsl(var(--header-foreground))] hover:bg-[hsl(var(--header-accent))] hover:bg-opacity-20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: 'hsl(var(--header-background))',
          }}
        >
          <nav className="flex flex-col space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium',
                  pathname === link.href
                    ? 'bg-[hsl(var(--header-accent))] text-white'
                    : 'text-[hsl(var(--header-foreground))] hover:bg-[hsl(var(--header-accent))] hover:bg-opacity-20'
                )}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
