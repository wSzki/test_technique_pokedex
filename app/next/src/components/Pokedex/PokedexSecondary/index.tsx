"use client"

import Div                      from '@/components/Div'
import Pixel                    from '@/components/Pixel'

import styled                   from 'styled-components';
import {StyleSheetManager}      from 'styled-components';
import isPropValid              from '@emotion/is-prop-valid';

import {GLOBALS}                from '@/settings'

import PokedexButtons           from './PokedexButtons';
import PokemonTypes             from './PokemonTypes';
import PokemonWidthHeight       from './PokemonWidthHeight';
import PokedexDescriptionScreen from './PokedexDescriptionScreen';
import PokedexEdge              from './PokedexEdge';
import PokedexSearchInput       from './PokedexSearchInput';
import PokedexDecoration        from './PokedexDecoration';

const styleProps= GLOBALS.WHITELISTED_PROPS


const MediaQueryWrapperTop = styled.div`
display: flex;
@media (max-width: 868px) {
	display: none;
}
`;

const MediaQueryWrapperBottom = styled.div`
display: none;
@media (max-width: 868px) {
	display: flex;
}
`;

const T = MediaQueryWrapperTop;
const B = MediaQueryWrapperBottom;


function PokedexBody ({children}:any) {
	return (
		<Div column center>
			<Pixel red h={3} w={35}/>
			<PokedexSearchInput/>

			<Pixel red h={2} w={35}/>
			<PokedexDescriptionScreen/>

			<Pixel red h={3} w={35}/>
			<PokedexButtons/>

			<Pixel red h={6} w={35}/>
			<PokemonTypes/>

			<Pixel red h={6} w={35}/>
			<PokemonWidthHeight/>

		</Div>
	)
}


export default function PokedexMain ({children}:any) {
	return (
		<StyleSheetManager shouldForwardProp={propertyName => isPropValid(propertyName) && !styleProps.includes(propertyName)}>
			<Div column>
				<T><PokedexEdge bottom={true}/></T>

				<Pixel red h={60} w={45}>
					<PokedexBody/>
				</Pixel>

				<B><PokedexEdge /></B>
			</Div>

			<T><PokedexDecoration/></T>

		</StyleSheetManager>
	)
}
