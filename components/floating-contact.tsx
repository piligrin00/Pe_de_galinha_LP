import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { contato } from '@/lib/site-data'

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={contato.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-all hover:scale-110 hover:bg-[#20bd5a] hover:shadow-2xl"
      >
        <span className="absolute inline-flex h-16 w-16 animate-ping rounded-full bg-[#25D366] opacity-40 group-hover:opacity-0" />
        <WhatsAppIcon className="relative h-8 w-8" />
      </a>
    </div>
  )
}
