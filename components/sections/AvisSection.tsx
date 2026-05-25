import { Star, Quote } from 'lucide-react'
import { Ornement } from '@/components/Ornement'

const avis = [
  {
    quote:
      'Une cuisine généreuse et vraiment faite maison, ça se sent à chaque bouchée. On revient les yeux fermés.',
    author: 'Camille R.',
    rot: '-1.4deg',
  },
  {
    quote:
      'Accueil chaleureux, produits frais, addition honnête. Le petit bistrot qu’on rêve d’avoir en bas de chez soi.',
    author: 'Thomas G.',
    rot: '1.2deg',
  },
  {
    quote:
      'Les Saint-Jacques étaient parfaites et la burrata un délice. Ambiance conviviale, on s’y sent comme à la maison.',
    author: 'Léa M.',
    rot: '-1deg',
  },
]

export function AvisSection() {
  return (
    <section className="bg-blanc py-24 sm:py-32">
      <div className="wrap">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-miel-deep">Ils sont passés à table</p>
          <h2 className="mt-4 font-cardo text-bistrot" style={{ fontSize: 'clamp(2rem, 4.4vw, 2.6rem)', lineHeight: 1.1 }}>
            4,6★ sur <span className="font-cardo-it text-miel-deep">312 avis</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3">
          {avis.map((a, i) => (
            <figure
              key={a.author}
              className={`reveal d${i + 1} relative flex flex-col rounded-[20px] border border-bistrot/10 bg-creme/50 p-8 shadow-[0_22px_44px_-28px_rgba(19,32,23,0.4)]`}
              style={{ transform: `rotate(${a.rot})` }}
            >
              <Quote className="h-7 w-7 text-miel/50" />
              <blockquote className="mt-4 flex-1 font-cardo-it text-[18px] leading-relaxed text-bistrot">
                {a.quote}
              </blockquote>
              <div className="mt-6 flex items-center justify-between border-t border-bistrot/10 pt-5">
                <figcaption className="font-mulish text-[14px] font-semibold text-brun">
                  {a.author}
                </figcaption>
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-miel text-miel" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>

        <div className="reveal mt-14 flex justify-center">
          <Ornement variant="divider" className="h-5 w-[180px] text-miel" />
        </div>
      </div>
    </section>
  )
}
