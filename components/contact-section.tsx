import { MapPin, Clock, Phone } from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { InstagramIcon } from '@/components/instagram-icon'
import { contato } from '@/lib/site-data'

const itens = [
  {
    icon: Phone,
    label: 'Telefone',
    valor: contato.telefone,
    href: contato.telefoneLink,
    external: false,
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    valor: contato.whatsapp,
    href: contato.whatsappLink,
    external: true,
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    valor: contato.instagram,
    href: contato.instagramLink,
    external: true,
  },
  {
    icon: MapPin,
    label: 'Endereço',
    valor: contato.endereco,
    href: contato.enderecoLink,
    external: true,
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="bg-secondary py-20 text-secondary-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contato
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-secondary-foreground text-balance sm:text-4xl">
            Fale com a gente
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-secondary-foreground/70 text-pretty">
            Estamos prontos para te atender. Clique em qualquer opção abaixo para falar direto com a
            loja.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <ul className="grid gap-4 sm:grid-cols-2">
            {itens.map((item) => {
              const Wrapper = item.href ? 'a' : 'div'
              return (
                <li key={item.label}>
                  <Wrapper
                    href={item.href || undefined}
                    target={item.href && item.external ? '_blank' : undefined}
                    rel={item.href && item.external ? 'noopener noreferrer' : undefined}
                    className={`flex h-full min-w-0 items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors ${item.href ? 'hover:border-primary/50 hover:bg-white/10' : 'opacity-60'}`}
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                        {item.label}
                      </span>
                      <span className="mt-1 break-words text-secondary-foreground/90">{item.valor}</span>
                    </span>
                  </Wrapper>
                </li>
              )
            })}
            <li className="sm:col-span-2">
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Horário
                  </span>
                  <span className="mt-1 text-secondary-foreground/90">{contato.horario}</span>
                </span>
              </div>
            </li>
          </ul>

          <div className="overflow-hidden rounded-xl border border-white/10">
            {contato.googleBusinessLink ? (
              <iframe
                src={contato.googleBusinessLink}
                title="Localização no Google Meu Negócio"
                className="h-full min-h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-full min-h-80 flex-col items-center justify-center gap-3 bg-white/5 p-8 text-center">
                <MapPin className="h-10 w-10 text-primary" />
                <p className="font-semibold text-secondary-foreground">
                  Ficha do Google Meu Negócio
                </p>
                <p className="max-w-xs text-sm text-secondary-foreground/70 text-pretty">
                  Assim que a ficha estiver criada, envie o link do mapa e ele aparecerá aqui
                  automaticamente.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
