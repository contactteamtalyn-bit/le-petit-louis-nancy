import { Ornement } from '@/components/Ornement'

export function Footer() {
  return (
    <footer className="bg-bistrot-deep">
      <div className="wrap py-16 text-center">
        <Ornement variant="sprig" className="mx-auto h-10 w-auto text-miel" />
        <p className="mt-5 font-cardo text-[2rem] text-creme">
          Le Petit <span className="font-cardo-it text-miel">Louis</span>
        </p>
        <p className="mt-3 font-mulish text-[12px] uppercase tracking-[0.24em] text-creme/45">
          Restaurant convivial · Nancy
        </p>

        <div className="mx-auto mt-8 max-w-md font-mulish text-[13px] leading-relaxed text-creme/55">
          <p>33 rue des Maréchaux · 54000 Nancy · 03 83 36 67 53</p>
          <p className="mt-1">Mar. fermé · Ouvert midi &amp; soir du mer. au lun.</p>
          <p className="mt-3 text-creme/70">@lepetitlouis.ncy</p>
        </div>
      </div>

      {/* Bande anti-vol */}
      <div className="border-t border-creme/10 bg-[#0E1812] py-4">
        <p className="wrap text-center font-mulish text-[11px] uppercase tracking-[0.18em] text-creme/35">
          Maquette non finale — Maison Talyn ·{' '}
          <span className="text-miel/60">@maison.talyn</span>
        </p>
      </div>
    </footer>
  )
}
