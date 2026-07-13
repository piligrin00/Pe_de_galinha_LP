import { MapPin } from 'lucide-react'
import { Logo } from '@/components/logo'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { InstagramIcon } from '@/components/instagram-icon'
import { contato, navLinks } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo className="h-16 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
            Sua loja de autopeças de confiança. Peças, acessórios e atendimento especializado para
            manter o seu carro sempre em dia.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-sm font-bold uppercase tracking-wide text-foreground">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm font-bold uppercase tracking-wide text-foreground">
            Contato
          </h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={contato.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <WhatsAppIcon className="h-4 w-4 text-primary" />
                {contato.whatsapp}
              </a>
            </li>
            <li>
              {contato.instagramLink ? (
                <a
                  href={contato.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <InstagramIcon className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="break-words">{contato.instagram}</span>
                </a>
              ) : (
                <span className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground/60">
                  <InstagramIcon className="h-4 w-4 flex-shrink-0 text-primary/60" />
                  <span className="break-words">{contato.instagram}</span>
                </span>
              )}
            </li>
            <li>
              {contato.enderecoLink ? (
                <a
                  href={contato.enderecoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="break-words">{contato.endereco}</span>
                </a>
              ) : (
                <span className="flex min-w-0 items-start gap-2 text-sm text-muted-foreground/60">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary/60" />
                  <span className="break-words">{contato.endereco}</span>
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-4 pt-6 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} Pé de Galinha Autopeças. Todos os direitos reservados.`}
        </p>
      </div>
    </footer>
  )
}
