'use client'

import * as React from 'react'
import { Phone, Instagram } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type Ctx = { open: () => void }
const DemoModalContext = React.createContext<Ctx>({ open: () => {} })
export const useDemoModal = () => React.useContext(DemoModalContext)

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const open = React.useCallback(() => setIsOpen(true), [])

  return (
    <DemoModalContext.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <p className="eyebrow text-miel-deep">Maquette de démonstration</p>
          <DialogTitle className="mt-3 text-[1.9rem] leading-tight">
            Une vitrine pour <span className="font-cardo-it">Le Petit Louis</span>
          </DialogTitle>
          <DialogDescription className="mt-4 text-[15px] leading-relaxed">
            Cette page est une maquette réalisée par Maison Talyn — les boutons sont
            désactivés le temps de la démo. Pour réserver une vraie table au Petit Louis,
            c&apos;est par téléphone ou en message&nbsp;:
          </DialogDescription>

          <div className="mt-6 space-y-3">
            <a
              href="tel:0383366753"
              className="flex items-center gap-3 rounded-2xl border border-bistrot/15 bg-creme/40 px-5 py-3.5 transition-colors hover:border-miel"
            >
              <Phone className="h-4 w-4 text-miel-deep" />
              <span className="font-mulish text-[15px] font-semibold text-bistrot">03 83 36 67 53</span>
            </a>
            <a
              href="https://instagram.com/lepetitlouis.ncy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-bistrot/15 bg-creme/40 px-5 py-3.5 transition-colors hover:border-miel"
            >
              <Instagram className="h-4 w-4 text-miel-deep" />
              <span className="font-mulish text-[15px] font-semibold text-bistrot">@lepetitlouis.ncy</span>
            </a>
          </div>

          <p className="mt-7 border-t border-bistrot/10 pt-5 font-cardo-it text-[14px] leading-relaxed text-brun-soft">
            « C&apos;est une maquette provisoire — tout est 100% modifiable selon vos goûts
            (couleurs, photos, sections, ton). On part de votre univers, pas du nôtre. »
          </p>
          <p className="mt-3 text-center font-mulish text-[11px] uppercase tracking-[0.22em] text-bistrot/40">
            Maison Talyn · @maison.talyn
          </p>
        </DialogContent>
      </Dialog>
    </DemoModalContext.Provider>
  )
}

/** Bouton CTA qui ouvre la modale démo (tous les CTA passent par là). */
export function DemoCTA({
  children,
  variant,
  size,
  className,
}: {
  children: React.ReactNode
  variant?: React.ComponentProps<typeof Button>['variant']
  size?: React.ComponentProps<typeof Button>['size']
  className?: string
}) {
  const { open } = useDemoModal()
  return (
    <Button type="button" onClick={open} variant={variant} size={size} className={className}>
      {children}
    </Button>
  )
}
