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
      {/* <link rel="icon" href="%PUBLIC_URL%/logo.png" /> */}
      {/* <link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/> */}
      {/* <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Zion Alliance Church Education website."
      /> */}
      {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" /> */}
      {/* <link
  rel="apple-touch-icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/> */}
      {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>Zion Alliance Church | Education</title> */}
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">{children}</div>
    </body>
  </html>)
}