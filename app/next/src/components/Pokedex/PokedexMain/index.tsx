"use client"
import Link                      from 'next/link';

import Div                       from '@/components/Div'
import Pixel                     from '@/components/Pixel'
import PixelCircle               from '@/components/PixelCircle'


import PokedexMainControl        from './PokedexMainControl'
import PokedexMainSeparator      from './PokedexMainSeparator'
import PokedexMainScreen         from './PokedexMainScreen'
import PokedexMainSecondayScreen from './PokedexMainSecondaryScreen'
import PokedexMainCorners        from './PokedexMainCorners'
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { useGlobalContext } from '@/context/GlobalContext';

import { GLOBALS } from '@/settings'
const styleProps = GLOBALS.WHITELISTED_PROPS

export default function PokedexMain ({children}:any) {
	const c:any = useGlobalContext();
	return (
		<StyleSheetManager shouldForwardProp={propertyName => isPropValid(propertyName) && !styleProps.includes(propertyName)}>
		<Div className = {`shadow`}>
			<Pixel red h={76} w={50}>
				<PokedexMainCorners/>
				<PokedexMainSeparator/>


				<PokedexMainSecondayScreen/>
				<PokedexMainScreen/>

				<Link style={{zIndex:999}} href={"/" + c.current_pokemon_name}><PixelCircle zoom  x={4}  y={17}/></Link>
				<PixelCircle heart  x={10} y={17}/>
				<Link style={{zIndex:999}} href="/list"><PixelCircle menu x={16} y={17}/></Link>
				<Link style={{zIndex:999}} href="/"><PixelCircle home  x={22} y={17}/></Link>
				<PokedexMainControl/>

			</Pixel>
		</Div>
		</StyleSheetManager>
	)
}
