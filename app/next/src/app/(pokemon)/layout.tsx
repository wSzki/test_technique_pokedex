import type { Metadata }     from 'next'
import { Inter }             from 'next/font/google'
import Pokedex               from "@/components/Pokedex"
import GlobalContextProvider from '@/context/GlobalContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Pokedex - wszki',
	description: 'Bealy Skill test by wszki',
}


export default function RootLayout({children,}: {children: React.ReactNode}) {
	return (
		<div
			style={{
				display        :"flex",
				width          :"100%",
				height         :"100%",
				justifyContent :"center",
				alignItems     :"center"
			}}>
			<GlobalContextProvider>
				{children}
				<Pokedex/>
			</GlobalContextProvider>
		</div>
	)
}
