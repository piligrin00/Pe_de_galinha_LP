'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { contato, navLinks } from '@/lib/site-data'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#topo" className="flex items-center gap-2" aria-label="Pé de Galinha Autopeças - início">
          <Logo className="h-16 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center sm:flex">
          <Button
            asChild
            className="gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-bold text-white shadow-lg shadow-[#25D366]/40 transition-all hover:scale-[1.05] hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/50"
          >
            <a href={contato.whatsappLink} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-6 w-6" />
              WhatsApp
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button
                asChild
                className="w-full gap-2 rounded-full bg-[#25D366] py-3 text-base font-bold text-white shadow-lg shadow-[#25D366]/40 transition-all hover:bg-[#20bd5a] hover:shadow-xl"
              >
                <a href={contato.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-6 w-6" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
