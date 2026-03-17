import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title:       { default: 'DecisionLog', template: '%s — DecisionLog' },
  description: 'Log and track team decisions so nothing gets lost in Slack threads.',
  keywords:    ['decisions', 'team', 'slack', 'knowledge management'],
  authors:     [{ name: 'DecisionLog' }],
  robots:      { index: true, follow: true },
  openGraph: {
    title:       'DecisionLog',
    description: 'Log and track team decisions so nothing gets lost in Slack threads.',
    type:        'website',
    locale:      'en_US',
  },
}

export const viewport: Viewport = {
  themeColor:   '#475569',
  colorScheme:  'light',
  width:        'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        {children}
      </body>
    </html>
  )
}
