import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo-pe-de-galinha.png"
      alt="Pé de Galinha Autopeças"
      className={cn('w-auto object-contain', className)}
    />
  )
}
