import { cn } from '@/lib/utils'
import { SmartImage } from '@/components/SmartImage'
import { Ornement } from '@/components/Ornement'

const dishes = [
  {
    num: '01',
    name: 'Bruschetta maison',
    desc: 'Pain de campagne grillé, tomates mûries au soleil, basilic frais et filet d’huile d’olive vierge.',
    price: '9 €',
    img: '/images/plats/plat-01.jpg',
  },
  {
    num: '02',
    name: 'Burrata crémeuse',
    desc: 'Burrata fondante, roquette, pignons torréfiés et condiments du moment. La fraîcheur à l’état pur.',
    price: '13 €',
    img: '/images/plats/plat-02.jpg',
  },
  {
    num: '03',
    name: 'Crevettes rolls',
    desc: 'Crevettes croustillantes roulées maison, sauce relevée et herbes fraîches. Notre petit péché.',
    price: '11 €',
    img: '/images/plats/plat-03.jpg',
  },
  {
    num: '04',
    name: 'Noix de Saint-Jacques',
    desc: 'Saint-Jacques snackées, écrasé crémeux de saison, jus corsé monté au beurre. La pièce maîtresse.',
    price: '19 €',
    img: '/images/plats/plat-04.jpg',
  },
]

export function LaCarteSection() {
  return (
    <section id="carte" className="bg-creme py-24 sm:py-32">
      <div className="wrap">
        {/* En-tête */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-miel-deep">À la carte</p>
          <h2 className="mt-4 font-cardo text-bistrot" style={{ fontSize: 'clamp(2rem, 4.4vw, 2.6rem)', lineHeight: 1.1 }}>
            Ce qu&apos;on vous <span className="font-cardo-it text-miel-deep">mijote</span>
          </h2>
          <p className="mt-5 font-mulish text-[15px] font-light leading-relaxed text-brun-soft">
            Quelques signatures de la maison. La carte évolue selon les saisons et les
            arrivages&nbsp;: demandez au serveur le plat du jour.
          </p>
        </div>

        {/* Rangs éditoriaux alternés */}
        <div className="mt-20 space-y-20 lg:space-y-28">
          {dishes.map((d, i) => {
            const flip = i % 2 === 1
            return (
              <div key={d.num} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Photo arche */}
                <div className={cn('lg:col-span-5', flip && 'lg:order-2')}>
                  <div
                    className="reveal-x frame-arch-soft gilt relative mx-auto aspect-[4/5] w-full max-w-[380px] bg-blanc lg:max-w-none"
                    style={{ '--rx': flip ? '34px' : '-34px' } as React.CSSProperties}
                  >
                    <SmartImage src={d.img} alt={d.name} className="h-full w-full" />
                  </div>
                </div>

                {/* Texte + numéro */}
                <div className={cn('relative lg:col-span-7', flip ? 'lg:order-1 lg:pr-10' : 'lg:pl-10')}>
                  <div className="reveal flex items-start gap-5">
                    <span className="num-outline shrink-0 text-[3.4rem] sm:text-[4.6rem]">{d.num}</span>
                    <div className="pt-2">
                      <div className="flex flex-wrap items-baseline gap-x-4">
                        <h3 className="font-cardo text-[1.7rem] leading-tight text-bistrot sm:text-[2rem]">
                          {d.name}
                        </h3>
                        <span className="price-tag text-[1.4rem] text-miel-deep">{d.price}</span>
                      </div>
                      <div className="rule-gilt mt-3 max-w-[220px]" />
                      <p className="mt-4 max-w-md font-mulish text-[15px] font-light leading-relaxed text-brun-soft sm:text-[16px]">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Dessert — l'ardoise du jour */}
        <div className="reveal mx-auto mt-24 max-w-2xl">
          <div className="flex justify-center">
            <Ornement variant="divider" className="h-5 w-[200px] text-miel" />
          </div>
          <div className="mt-8 rounded-[28px_28px_14px_14px] bg-bistrot px-8 py-12 text-center shadow-[0_30px_60px_-30px_rgba(19,32,23,0.6)]">
            <p className="eyebrow text-miel">Et pour finir…</p>
            <h3 className="mt-4 font-cardo-it text-[1.9rem] leading-tight text-creme sm:text-[2.2rem]">
              Le dessert maison du moment
            </h3>
            <p className="mx-auto mt-5 max-w-md font-mulish text-[15px] font-light leading-relaxed text-creme/70">
              Tartes, crémeux, fruits rôtis de saison… nos desserts changent au gré de
              l&apos;inspiration et du marché. Demandez l&apos;ardoise — il y a toujours
              une gourmandise qui vous attend.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
