import type { Metadata } from 'next'
import { Inter }         from 'next/font/google'
import '@/css/globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Pokedex - wszki',
	description: 'Bealy Skill test by wszki',
}


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				className={inter.className}
				style={{
				display  :"flex",
				position :"fixed",
				height   :"100%",
				width    :"100vw"
				}}>
					{children}
			</body>
		</html>
	)
}
