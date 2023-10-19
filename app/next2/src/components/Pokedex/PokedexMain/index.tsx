"use client"
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

import { GLOBALS } from '@/settings'
const styleProps = GLOBALS.WHITELISTED_PROPS

export default function PokedexMain ({children}:any) {
	return (
		<StyleSheetManager shouldForwardProp={propertyName => isPropValid(propertyName) && !styleProps.includes(propertyName)}>
		<Div>
			<Pixel red h={76} w={50}>
				<PokedexMainCorners/>
				<PokedexMainSeparator/>


				<PokedexMainSecondayScreen/>
				<PokedexMainScreen/>

				<PixelCircle x={4} y={17}/>
				<PixelCircle x={10} y={17}/>
				<PokedexMainControl/>

			</Pixel>
		</Div>
		</StyleSheetManager>
	)
}
