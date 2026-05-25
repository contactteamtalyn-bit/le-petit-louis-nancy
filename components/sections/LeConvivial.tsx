import { Ornement } from '@/components/Ornement'
import { SmartImage } from '@/components/SmartImage'

export function LeConvivial() {
  return (
    <section className="relative bg-blanc py-24 sm:py-32">
      <div className="wrap grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Texte */}
        <div className="lg:col-span-6">
          <p className="reveal eyebrow text-miel-deep">L&apos;esprit de la maison</p>
          <h2 className="reveal d1 mt-5 font-cardo-it text-bistrot" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.5rem)', lineHeight: 1.18 }}>
            Au Petit Louis, on ne fait pas semblant.
          </h2>

          <div className="reveal d2 mt-7 space-y-5 font-mulish text-[16px] font-light leading-relaxed text-brun-soft sm:text-[17px]">
            <p>
              La cuisine est faite ici, avec des produits frais choisis chaque matin.
              On s&apos;installe, on se détend, on mange bien. C&apos;est tout — et
              c&apos;est déjà beaucoup.
            </p>
            <p>
              À deux pas de la place Stanislas, dans une ville qui a inventé l&apos;Art
              nouveau, on cultive un certain art de la table&nbsp;: celui des bonnes
              choses, partagées sans chichi, entre amis et habitués.
            </p>
          </div>

          <div className="reveal d3 mt-9">
            <Ornement variant="divider" className="h-5 w-[180px] text-miel" />
          </div>
        </div>

        {/* Photo facade — arche + bloc offset */}
        <div className="relative lg:col-span-6">
          <div
            className="absolute -bottom-6 -right-4 hidden h-[78%] w-[70%] rounded-[10px] bg-bistrot/8 sm:block"
            aria-hidden="true"
          />
          <div className="reveal d1 relative mx-auto w-full max-w-[440px] lg:max-w-none">
            <div className="frame-arch gilt relative aspect-[4/5] w-full bg-creme">
              <SmartImage src="/images/salle/salle-main.jpg" alt="La devanture du Petit Louis, rue des Maréchaux à Nancy" className="h-full w-full" />
            </div>
            {/* étiquette adresse */}
            <div className="absolute -left-3 top-8 hidden -rotate-90 origin-left sm:block">
              <span className="font-mulish text-[10px] uppercase tracking-[0.32em] text-bistrot/45">
                Est. · Nancy
              </span>
            </div>
            <p className="mt-5 text-center font-cardo-it text-[15px] text-brun-soft/80">
              33 rue des Maréchaux · 54000 Nancy
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
