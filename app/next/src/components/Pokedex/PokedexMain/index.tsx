"use client"
import Link                      from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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

function Favorite ({children}:any) {
	const [faved, set_faved] = useState(false);
	const c:any = useGlobalContext();
	const path = usePathname();
	useEffect(() => {
		const pokemons_from_localStorage = localStorage.getItem('favorites') ;
		if (!pokemons_from_localStorage) return;
		const pokemons = (JSON.parse(pokemons_from_localStorage));
		if (pokemons.includes(c.current_pokemon_id)) set_faved(true);
		else set_faved(false);
	}, [c.current_pokemon_name, c, c.current_pokemon_id])

	function handleFavourite () {
		const pokemons_from_localStorage = localStorage.getItem('favorites') ?? "[]";
		const pokemons = (JSON.parse(pokemons_from_localStorage));
		if (!pokemons.includes(c.current_pokemon_id)){
			pokemons.push(c.current_pokemon_id);
			localStorage.setItem('favorites', JSON.stringify(pokemons));
			set_faved(true);
		}
		else {
			// remove c.current_pokemnon_name from pokemons
			const new_pokemons = pokemons.filter((p:any)=>p !== c.current_pokemon_id);
			localStorage.setItem('favorites', JSON.stringify(new_pokemons));
			set_faved(false);
		}
	}

	return (
		<div onClick={()=>{handleFavourite()}}>
			{faved && <PixelCircle heart  x={10} y={17}/>}
			{!faved && <PixelCircle noheart  x={10} y={17}/>}
		</div>
	)
}

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
				<Favorite/>
				<Link style={{zIndex:999}} href="/list"><PixelCircle menu x={16} y={17}/></Link>
				<Link style={{zIndex:999}} href="/"><PixelCircle home  x={22} y={17}/></Link>
				<PokedexMainControl/>

			</Pixel>
		</Div>
		</StyleSheetManager>
	)
}
