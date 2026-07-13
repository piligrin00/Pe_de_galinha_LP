import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { avaliacoes } from '@/lib/site-data'

function Stars({ nota }: { nota: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Nota ${nota} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < nota ? 'h-4 w-4 fill-[#fbbc04] text-[#fbbc04]' : 'h-4 w-4 fill-muted text-muted'
          }
        />
      ))}
    </div>
  )
}

const media = (
  avaliacoes.reduce((acc, a) => acc + a.nota, 0) / avaliacoes.length
).toFixed(1)

export function ReviewsSection() {
  return (
    <section id="avaliacoes" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Avaliações
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 shadow-sm">
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.46 14.97.5 12 .5A11 11 0 0 0 2.18 7.06L5.84 9.9C6.71 7.3 9.14 4.75 12 4.75Z"
              />
            </svg>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">{media}</span>
              <Stars nota={Math.round(Number(media))} />
              <span className="text-sm text-muted-foreground">({avaliacoes.length})</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {avaliacoes.map((a) => (
            <Card key={a.nome} className="h-full">
              <CardContent className="flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {a.inicial}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{a.nome}</p>
                    <p className="text-xs text-muted-foreground">{a.tempo}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <Stars nota={a.nota} />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {a.texto}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
