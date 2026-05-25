import { cn } from '@/lib/utils'
import { SmartImage } from '@/components/SmartImage'
import { Ornement } from '@/components/Ornement'

// Mur de cadres : rotations + arches alternées (le “wall of frames” du bistrot)
const photos = Array.from({ length: 13 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return { src: `/images/galerie/galerie-${n}.jpg`, arched: i % 3 === 1 }
})
const rotations = [-2.2, 1.6, -1.2, 2, -1.6, 1.2, -2, 1.4, -1.4, 2.1, -1.8, 1.5, -1.3]

export function GalerieSection() {
  return (
    <section id="galerie" className="bg-creme py-24 sm:py-32">
      <div className="wrap">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-miel-deep">L&apos;album de la maison</p>
          <h2 className="mt-4 font-cardo text-bistrot" style={{ fontSize: 'clamp(2rem, 4.4vw, 2.6rem)', lineHeight: 1.1 }}>
            À table, <span className="font-cardo-it text-miel-deep">en images</span>
          </h2>
          <p className="mt-5 font-mulish text-[15px] font-light leading-relaxed text-brun-soft">
            Un mur de souvenirs gourmands, comme ceux qu&apos;on accroche au-dessus du
            comptoir. Survolez pour redresser le cadre.
          </p>
          <div className="mt-7 flex justify-center">
            <Ornement variant="divider" className="h-5 w-[180px] text-miel" />
          </div>
        </div>

        {/* Mur masonry */}
        <div className="mt-16 columns-2 gap-4 sm:columns-3 sm:gap-6 lg:columns-4">
          {photos.map((p, i) => (
            <figure key={p.src} className="mb-4 break-inside-avoid sm:mb-6">
              <div
                className={cn(
                  'wall-frame gilt overflow-hidden bg-blanc',
                  p.arched ? 'frame-arch-soft' : 'rounded-[12px]'
                )}
                style={{ transform: `rotate(${rotations[i]}deg)` }}
              >
                <SmartImage src={p.src} alt={`Le Petit Louis — plat maison ${i + 1}`} className="h-auto w-full" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
