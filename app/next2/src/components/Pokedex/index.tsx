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

import { gql, useQuery } from '@apollo/client';
import { GLOBALS } from '@/settings'

function PokedexMain ({children}:any) {
	return (
		<Div>
			<Pixel red h={76} w={50}>
				<PokedexMainCorners/>
				<PokedexMainSeparator/>

				<PokedexMainControl/>
				<PixelCircle/>

				<PokedexMainSecondayScreen/>
				<PokedexMainScreen/>

			</Pixel>
		</Div>
	)
}
const query = gql`
query samplePokeAPIquery {
	gen3_species: pokemon_v2_pokemonspecies{
		name
		id
	}
}
`;

const styleProps = GLOBALS.WHITELISTED_PROPS

export default function Pokedex ({children}:any) {
	const { loading, error, data } = useQuery(query);
	console.log(data);
	return (
		<StyleSheetManager shouldForwardProp={propertyName => isPropValid(propertyName) && !styleProps.includes(propertyName)}>
			<PokedexMain>
				{children}
			</PokedexMain>
		</StyleSheetManager>
	)
}
