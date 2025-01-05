import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CustomCursor from '@/components/CustomCursor'
import DynamicBackground from '@/components/DynamicBackground'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeOholics',
  description: 'A community for passionate coders in the digital frontier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <DynamicBackground />
            <Header />
            <main className="flex-grow relative z-10">{children}</main>
            <Footer />
          </div>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'