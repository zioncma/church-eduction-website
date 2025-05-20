import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: 'black',
}

export const metadata: Metadata = {
  title: 'Zion Alliance Church | Education',
  description: 'Zion Alliance Church Education website',
  creator: 'Zion Alliance Church Education Team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="en">
    <head>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">{children}</div>
    </body>
  </html>)
}