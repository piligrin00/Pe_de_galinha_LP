import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { contato } from '@/lib/site-data'

export function HeroSection() {
  return (
    <section id="topo" className="relative isolate min-h-[600px] overflow-hidden bg-secondary">
      {/* Imagem de fundo cobrindo toda a seção */}
      <img
        src="/images/hero-mecanico.png"
        alt="Atendente da Pé de Galinha Autopeças sorrindo em frente à oficina"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_top]"
      />

      {/* Overlay escuro para legibilidade do texto */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary via-secondary/60 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-secondary/10" />

      <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex max-w-2xl flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            <Star className="h-4 w-4 fill-primary text-primary" />
            Mais de 10 anos cuidando do seu carro
          </span>

          <h1 className="font-serif text-4xl font-bold uppercase leading-tight tracking-tight text-white text-balance sm:text-5xl md:text-6xl">
            As peças certas para o seu carro, com preço justo e entrega na hora
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-white/85 text-pretty">
            Palhetas, lâmpadas, fusíveis e muito mais. Fale com a gente e receba um orçamento
            rápido pelo WhatsApp.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-[#25D366]/40 transition-all hover:scale-[1.05] hover:bg-[#20bd5a] hover:shadow-[#25D366]/60"
            >
              <a href={contato.whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-6 w-6" />
                Pedir orçamento no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
