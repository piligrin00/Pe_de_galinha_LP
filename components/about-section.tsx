import { CheckCircle2, ImageIcon } from 'lucide-react'

const destaques = [
  'Peças originais e paralelas de qualidade',
  'Atendimento rápido e sem enrolação',
  'Melhor custo-benefício da região',
]

export function AboutSection() {
  return (
    <section id="sobre" className="bg-muted py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex min-h-72 flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-dashed border-border bg-background p-8 text-center">
          <ImageIcon className="h-10 w-10 text-muted-foreground" />
          <p className="font-semibold text-foreground">Foto da loja em breve</p>
          <p className="max-w-xs text-sm text-muted-foreground text-pretty">
            Assim que você enviar fotos da fachada ou do interior, colocamos aqui.
          </p>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Sobre nós
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-4xl">
            Uma autopeças feita para quem entende de carro
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            A Pé de Galinha Autopeças nasceu com um objetivo simples: oferecer as peças certas, com
            preço honesto e um atendimento que resolve. Ao longo dos anos construímos a confiança de
            mecânicos e motoristas da região, sempre com estoque completo e uma equipe pronta para
            ajudar.
          </p>

          <ul className="mt-8 space-y-3">
            {destaques.map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
