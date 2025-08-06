//import { Analytics } from '@vercel/analytics/react';
//import { SpeedInsights } from "@vercel/speed-insights/next";

import './globals.css'

import { GeistSans, GeistMono } from 'geist/font'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
		<head>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/css/flag-icons.min.css" />
		</head>

			<body>
				{children}
				{/*<Analytics />
				<SpeedInsights /> */}
			</body>
    </html>
  )
}
