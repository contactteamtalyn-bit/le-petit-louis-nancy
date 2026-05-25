import type { Metadata } from 'next'
import { Cardo, Mulish } from 'next/font/google'
import './globals.css'
import { DemoBanner } from '@/components/DemoBanner'
import { DemoModalProvider } from '@/components/DemoModal'
import { SiteInteractions } from '@/components/SiteInteractions'

// Cardo n'a pas de bold-italic → on charge l'italique dans sa propre instance
const cardo = Cardo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cardo',
  display: 'swap',
})
const cardoItalic = Cardo({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-cardo-it',
  display: 'swap',
})
const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mulish',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Le Petit Louis · Bistrot convivial — Nancy',
  description:
    'Le Petit Louis, bistrot 100% maison au cœur de Nancy. Produits frais et de saison, ambiance conviviale, 33 rue des Maréchaux. 4,6★ · 312 avis.',
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cardo.variable} ${cardoItalic.variable} ${mulish.variable}`}>
      <body className="font-mulish antialiased">
        <DemoBanner />
        <DemoModalProvider>
          <main className="relative z-[2]">{children}</main>
        </DemoModalProvider>
        <SiteInteractions />
      </body>
    </html>
  )
}
