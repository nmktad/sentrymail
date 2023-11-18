import type { Metadata } from 'next'
import { GeistSans } from 'geist/font';
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'SentryMail | Secure Email Client',
  description: 'SentryMail is a secure email client that allows you to send and receive emails securely.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={GeistSans.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
