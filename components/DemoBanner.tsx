export function DemoBanner() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center bg-bistrot-deep"
      style={{ height: 'var(--banner-h)' }}
    >
      <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap px-4">
        <span className="font-mulish text-[11px] font-semibold uppercase tracking-[0.18em] text-miel">
          Maquette démo
        </span>
        <span className="hidden sm:inline font-mulish text-[11px] uppercase tracking-[0.18em] text-creme/55">
          · Réalisée par Maison Talyn pour Le Petit Louis · Non finalisée ·
        </span>
        <span className="sm:hidden font-mulish text-[11px] uppercase tracking-[0.18em] text-creme/55">
          · Maison Talyn ·
        </span>
        <span className="font-mulish text-[11px] font-semibold uppercase tracking-[0.18em] text-creme">
          @maison.talyn
        </span>
      </div>
    </div>
  )
}
