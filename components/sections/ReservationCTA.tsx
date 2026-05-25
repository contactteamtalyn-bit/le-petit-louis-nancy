import { DemoCTA } from '@/components/DemoModal'
import { Ornement } from '@/components/Ornement'

export function ReservationCTA() {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: 'linear-gradient(160deg, #D9BE80 0%, #C4A255 55%, #A8842F 100%)' }}
    >
      <div className="wrap relative text-center">
        <div className="reveal flex justify-center">
          <Ornement variant="divider" className="h-5 w-[200px] text-bistrot-deep/70" />
        </div>

        <h2 className="reveal d1 mx-auto mt-7 max-w-2xl font-cardo-it text-bistrot-deep" style={{ fontSize: 'clamp(2.2rem, 5.2vw, 3.2rem)', lineHeight: 1.08 }}>
          Votre table vous attend.
        </h2>
        <p className="reveal d2 mx-auto mt-5 max-w-md font-mulish text-[16px] font-light leading-relaxed text-brun">
          Réservation par téléphone ou en message — on garde toujours une place pour les
          gourmands.
        </p>

        <div className="reveal d3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <DemoCTA variant="primary" size="lg">
            Appeler · 03 83 36 67 53
          </DemoCTA>
          <DemoCTA variant="outline" size="lg" className="border-bistrot-deep/40 text-bistrot-deep hover:border-bistrot-deep hover:text-bistrot-deep">
            DM Instagram · @lepetitlouis.ncy
          </DemoCTA>
        </div>
      </div>
    </section>
  )
}
