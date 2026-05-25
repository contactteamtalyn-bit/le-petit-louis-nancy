import { Hero } from '@/components/sections/Hero'
import { StatStrip } from '@/components/sections/StatStrip'
import { LeConvivial } from '@/components/sections/LeConvivial'
import { LaCarteSection } from '@/components/sections/LaCarteSection'
import { LeFaitMaison } from '@/components/sections/LeFaitMaison'
import { GalerieSection } from '@/components/sections/GalerieSection'
import { AvisSection } from '@/components/sections/AvisSection'
import { HorairesContact } from '@/components/sections/HorairesContact'
import { ReservationCTA } from '@/components/sections/ReservationCTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <StatStrip />
      <LeConvivial />
      <LaCarteSection />
      <LeFaitMaison />
      <GalerieSection />
      <AvisSection />
      <HorairesContact />
      <ReservationCTA />
      <Footer />
    </>
  )
}
