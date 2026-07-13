import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { contato, produtos } from '@/lib/site-data'

export function ProductsSection() {
  return (
    <section id="produtos" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Nossos produtos
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-4xl">
            Tudo o que o seu veículo precisa
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Trabalhamos com as principais marcas do mercado. Não achou o que procura? Chame no
            WhatsApp que a gente encontra pra você.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto) => (
            <Card key={produto.nome} className="group overflow-hidden pt-0 transition-shadow hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={produto.imagem || '/placeholder.svg'}
                  alt={produto.nome}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="flex flex-1 flex-col">
                <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-foreground">
                  {produto.nome}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {produto.descricao}
                </p>
                <div className="mt-5 flex">
                  <Button
                    asChild
                    className="w-full gap-2 rounded-full bg-[#25D366] py-3 text-base font-bold text-white shadow-lg shadow-[#25D366]/40 transition-all hover:scale-[1.03] hover:bg-[#20bd5a] hover:shadow-xl"
                  >
                    <a href={contato.whatsappLink} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="h-5 w-5" />
                      Pedir no WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
