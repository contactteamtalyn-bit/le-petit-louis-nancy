import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DemoCTA } from '@/components/DemoModal'
import { SmartImage } from '@/components/SmartImage'
import { Ornement } from '@/components/Ornement'

function WaxSeal() {
  return (
    <div className="relative grid h-[112px] w-[112px] place-items-center rounded-full bg-miel text-bistrot-deep shadow-[0_14px_30px_-10px_rgba(168,132,47,0.8)] ring-1 ring-bistrot-deep/15">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin [animation-duration:22s] motion-reduce:animate-none">
        <defs>
          <path id="sealcircle" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
        </defs>
        <text className="font-mulish" fontSize="9.5" fontWeight="700" letterSpacing="1.6" fill="currentColor">
          <textPath href="#sealcircle" startOffset="0">
            · FAIT MAISON · PRODUITS FRAIS · DE SAISON
          </textPath>
        </text>
      </svg>
      <span className="font-cardo-it text-[26px] leading-none">L</span>
    </div>
  )
}

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'radial-gradient(120% 90% at 88% 8%, #F5EDD8 0%, #FDFAF4 46%, #FDFAF4 100%)',
      }}
    >
      <div className="wrap grid min-h-[calc(100vh-var(--banner-h))] grid-cols-1 items-center gap-12 py-20 lg:grid-cols-12 lg:gap-8 lg:py-0">
        {/* ── Texte ── */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          <div className="intro i1 flex items-center gap-3">
            <Ornement variant="sprig" className="h-9 w-auto text-miel" />
            <p className="eyebrow text-miel-deep">Bistrot convivial · Nancy</p>
          </div>

          <h1 className="intro i2 mt-5 font-cardo text-bistrot" style={{ fontSize: 'clamp(2.9rem, 7.4vw, 5.4rem)', lineHeight: 0.96 }}>
            Le Petit
            <span className="block font-cardo-it text-miel-deep">Louis</span>
          </h1>

          <p className="intro i3 mt-7 max-w-xl font-mulish text-[17px] font-light leading-relaxed text-brun-soft sm:text-[18px]">
            La cuisine 100% maison, comme à la table d&apos;un ami. Produits frais et de
            saison, choisis chaque matin. On s&apos;attable, on partage, on se régale — au
            cœur de Nancy, rue des Maréchaux.
          </p>

          <div className="intro i4 mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-miel text-miel" />
              ))}
            </span>
            <span className="font-mulish text-[15px] text-bistrot">
              <strong className="font-semibold">4,6</strong>
              <span className="text-brun-soft/70"> · 312 avis Google</span>
            </span>
          </div>

          <div className="intro i5 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <DemoCTA variant="primary" size="lg">
              Réserver · 03 83 36 67 53
            </DemoCTA>
            <Button asChild variant="outline" size="lg">
              <a href="#carte">Découvrir la carte</a>
            </Button>
          </div>
        </div>

        {/* ── Photo arche + sceau ── */}
        <div className="intro i3 relative order-1 mx-auto w-full max-w-[400px] lg:order-2 lg:col-span-5 lg:max-w-none">
          <div className="frame-arch gilt relative aspect-[4/5] w-full bg-creme">
            <SmartImage src="/images/hero/hero-main.jpg" alt="Plat signature du Petit Louis, fait maison" eager className="h-full w-full" />
          </div>
          <div className="absolute -bottom-5 -left-3 sm:-left-6 animate-sway motion-reduce:animate-none">
            <WaxSeal />
          </div>
          <Ornement variant="sprig" className="absolute -right-2 -top-6 h-12 w-auto rotate-12 text-miel/70" />
        </div>
      </div>
    </section>
  )
}
