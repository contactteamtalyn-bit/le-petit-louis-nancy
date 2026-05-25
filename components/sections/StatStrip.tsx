import { Ornement } from '@/components/Ornement'

const stats = [
  { value: '4,6★', label: 'Note Google' },
  { value: '312', label: 'Avis vérifiés' },
  { value: '100%', label: 'Fait maison' },
  { value: '6j/7', label: 'Mardi fermé' },
]

export function StatStrip() {
  return (
    <section className="bg-bistrot py-12 sm:py-14">
      <div className="wrap">
        <div className="reveal flex justify-center">
          <Ornement variant="divider" className="h-5 w-[200px] text-miel/70" />
        </div>
        <div className="reveal d1 mt-8 grid grid-cols-2 gap-y-9 sm:grid-cols-4 sm:divide-x sm:divide-miel/20">
          {stats.map((s) => (
            <div key={s.label} className="px-4 text-center">
              <p className="font-cardo text-[2.4rem] leading-none text-miel sm:text-[2.7rem]">
                {s.value}
              </p>
              <p className="mt-3 font-mulish text-[11px] uppercase tracking-[0.24em] text-creme/55">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
