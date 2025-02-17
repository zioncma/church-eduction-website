import { ClientOnly } from './client'

export function generateStaticParams() {
  return [{ slug: [''] },
  { slug: ["news"] }, // Handles /news
  {slug: ["growth"]},
  ]
}

export default function Page() {
  return <ClientOnly />
}