import { MapPin, Phone, Instagram } from 'lucide-react'
import { cn } from '@/lib/utils'

const horaires = [
  { jour: 'Lundi', h: '12h–14h · 19h–22h' },
  { jour: 'Mardi', h: 'Fermé', closed: true },
  { jour: 'Mercredi', h: '19h–22h' },
  { jour: 'Jeudi', h: '19h–22h' },
  { jour: 'Vendredi', h: '12h–14h · 19h–23h' },
  { jour: 'Samedi', h: '12h–14h30 · 19h–23h30' },
  { jour: 'Dimanche', h: '12h–14h30 · 19h–22h' },
]

export function HorairesContact() {
  return (
    <section id="infos" className="bg-creme py-24 sm:py-32">
      <div className="wrap grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Horaires */}
        <div>
          <p className="reveal eyebrow text-miel-deep">Horaires</p>
          <h2 className="reveal d1 mt-4 font-cardo text-bistrot" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>
            Quand passer nous voir
          </h2>

          <ul className="reveal d2 mt-9 divide-y divide-bistrot/10">
            {horaires.map((j) => (
              <li key={j.jour} className="flex items-center justify-between py-3.5">
                <span
                  className={cn(
                    'font-mulish text-[15px]',
                    j.closed ? 'text-bistrot/40' : 'font-medium text-bistrot'
                  )}
                >
                  {j.jour}
                </span>
                <span
                  className={cn(
                    'text-right font-mulish text-[14px]',
                    j.closed ? 'font-cardo-it text-miel-deep' : 'text-brun-soft'
                  )}
                >
                  {j.h}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + carte */}
        <div>
          <p className="reveal eyebrow text-miel-deep">Nous trouver</p>
          <h2 className="reveal d1 mt-4 font-cardo text-bistrot" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>
            Au cœur de Nancy
          </h2>

          <div className="reveal d2 mt-9 space-y-4">
            <a href="https://maps.google.com/?q=Le+Petit+Louis+33+rue+des+Maréchaux+Nancy" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-miel-deep" />
              <span className="font-mulish text-[15px] text-bistrot transition-colors group-hover:text-miel-deep">
                33 rue des Maréchaux<br />54000 Nancy
              </span>
            </a>
            <a href="tel:0383366753" className="group flex items-center gap-4">
              <Phone className="h-5 w-5 shrink-0 text-miel-deep" />
              <span className="font-mulish text-[15px] text-bistrot transition-colors group-hover:text-miel-deep">
                03 83 36 67 53
              </span>
            </a>
            <a href="https://instagram.com/lepetitlouis.ncy" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
              <Instagram className="h-5 w-5 shrink-0 text-miel-deep" />
              <span className="font-mulish text-[15px] text-bistrot transition-colors group-hover:text-miel-deep">
                @lepetitlouis.ncy
              </span>
            </a>
          </div>

          <div className="reveal d3 mt-8 overflow-hidden rounded-[18px] border border-bistrot/10 shadow-[0_20px_44px_-28px_rgba(19,32,23,0.4)]">
            <iframe
              title="Le Petit Louis sur Google Maps"
              src="https://www.google.com/maps?q=33+rue+des+Mar%C3%A9chaux,+54000+Nancy&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
