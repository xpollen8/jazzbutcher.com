import localFont from 'next/font/local'
import './globals.css'

const myFont = localFont({ src: '../../public/fonts/Titillium-Regular.otf' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
				{children}
			</body>
    </html>
  )
}
