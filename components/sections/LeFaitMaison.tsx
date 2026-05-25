import { Leaf, ChefHat, CalendarHeart } from 'lucide-react'
import { Ornement } from '@/components/Ornement'

const engagements = [
  { icon: Leaf, title: 'Produits frais', text: 'Choisis au marché chaque matin, selon l’arrivage.' },
  { icon: ChefHat, title: 'Recettes maison', text: 'Tout est cuisiné ici. Rien de surgelé, rien de tout prêt.' },
  { icon: CalendarHeart, title: 'Au fil des saisons', text: 'La carte change quand la nature change. Forcément.' },
]

const lines = [
  'Rien ne vient de chez Métro.',
  'Rien ne sort d’un sachet.',
  'Tout est préparé ici, le matin,',
  'pour vous, ce soir.',
]

export function LeFaitMaison() {
  return (
    <section className="relative overflow-hidden bg-bistrot-deep py-28 sm:py-36">
      {/* filigrane ornemental */}
      <Ornement
        variant="sprig"
        className="pointer-events-none absolute -right-6 top-10 h-40 w-auto rotate-12 text-miel/10"
      />
      <Ornement
        variant="sprig"
        className="pointer-events-none absolute -left-6 bottom-10 h-40 w-auto -rotate-12 text-miel/10"
      />

      <div className="wrap relative text-center">
        <div className="reveal flex justify-center">
          <Ornement variant="divider" className="h-5 w-[200px] text-miel/80" />
        </div>
        <p className="reveal d1 mt-7 eyebrow text-miel">La promesse de la maison</p>

        {/* Manifeste ligne à ligne */}
        <div className="mx-auto mt-8 max-w-3xl">
          {lines.map((l, i) => (
            <p
              key={i}
              className={`reveal d${i + 1} font-cardo-it text-creme`}
              style={{ fontSize: 'clamp(1.6rem, 4.2vw, 2.8rem)', lineHeight: 1.28 }}
            >
              {l}
            </p>
          ))}
        </div>

        {/* 3 engagements — médaillons arche */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {engagements.map((e, i) => {
            const Icon = e.icon
            return (
              <div key={e.title} className={`reveal d${i + 1} flex flex-col items-center`}>
                <div className="frame-arch grid h-16 w-14 place-items-center border border-miel/40 bg-bistrot-soft/40">
                  <Icon className="h-6 w-6 text-miel" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-cardo text-[1.25rem] text-creme">{e.title}</h3>
                <p className="mt-2 max-w-[230px] font-mulish text-[14px] font-light leading-relaxed text-creme/55">
                  {e.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
