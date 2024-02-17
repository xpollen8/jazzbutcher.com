import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";

import './globals.css'

import { GeistSans, GeistMono } from 'geist/font'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
			<body>
				<div style={{ border: 'solid', backgroundColor: '#ffffff', padding: '3px', textAlign: 'center' }}>
					<h2>
						Celebrating 30 goddamned WWW years: <a href="https://v1.jazzbutcher.com/articles/1994/0020.html"><span style={{ color: '#00f' }}>1994-02-17</span></a>
							<br/>
								One of the 1st 1,000 websites IN THE WORLD.
									</h2>
										</div>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
    </html>
  )
}
