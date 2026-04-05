import { Clock, MapPin, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-xl font-bold">
              Eva <span className="text-primary">Estetic</span>
            </span>
            <p className="mt-3 font-body text-sm text-muted-foreground">
              Do skincare ao adeus à tatuagem, cuidamos de você por completo.
            </p>
            <p className="mt-2 font-body text-xs text-muted-foreground">
              Dra. Eva Borges
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold">
              Navegação
            </h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nos"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Serviços
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold">Contato</h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <a
                  href="https://wa.me/5511991198988"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  (11) 99119-8988
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Rua Serra de Bragança, 50
                  <br />
                  Tatuapé — São Paulo, SP
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Seg–Sex: 8h–19h
                  <br />
                  Sáb: 8h–16h
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold">
              Redes Sociais
            </h3>
            <a
              href="https://www.instagram.com/draevaborges_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <FaInstagram className="h-5 w-5" />
              @draevaborges_
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center font-body text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Eva Estetic — Dra. Eva Borges.
            Todos os direitos reservados.
          </p>
          <p className="mt-1">www.evaestetic.com.br</p>
        </div>
      </div>
    </footer>
  );
}
