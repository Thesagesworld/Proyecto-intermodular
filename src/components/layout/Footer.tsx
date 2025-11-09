import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t mt-12">
      <div className="container py-8 text-center text-muted-foreground">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-primary" /></a>
          <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-primary" /></a>
          <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-primary" /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 hover:text-primary" /></a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Proyecto Educativo de Turismo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
